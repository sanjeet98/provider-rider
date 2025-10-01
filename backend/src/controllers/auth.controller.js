import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../config/database.js';

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { email, password, role, ...profileData } = req.body;

    // Validate input
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Please provide email, password, and role' });
    }

    // Check if user exists
    const userExists = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const userResult = await query(
      'INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING id, email, role, created_at',
      [email, passwordHash, role]
    );

    const user = userResult.rows[0];

    // Create role-specific profile
    if (role === 'customer') {
      await query(
        `INSERT INTO customers (user_id, first_name, last_name, phone, address) 
         VALUES ($1, $2, $3, $4, $5)`,
        [
          user.id,
          profileData.firstName || '',
          profileData.lastName || '',
          profileData.phone || '',
          profileData.address || '',
        ]
      );
    } else if (role === 'provider') {
      await query(
        `INSERT INTO providers (user_id, first_name, last_name, phone) 
         VALUES ($1, $2, $3, $4)`,
        [
          user.id,
          profileData.firstName || '',
          profileData.lastName || '',
          profileData.phone || '',
        ]
      );
    } else if (role === 'admin') {
      await query(
        'INSERT INTO admins (user_id, name) VALUES ($1, $2)',
        [user.id, profileData.name || 'Admin']
      );
    } else if (role === 'insurance') {
      await query(
        'INSERT INTO insurers (user_id, company_name) VALUES ($1, $2)',
        [user.id, profileData.companyName || 'Insurance Company']
      );
    }

    // Create wallet for customer
    if (role === 'customer') {
      await query('INSERT INTO wallets (user_id, balance) VALUES ($1, 0.00)', [user.id]);
    }

    res.status(201).json({
      id: user.id,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check for user
    const result = await query(
      'SELECT id, email, password_hash, role, is_active FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.rows[0];

    if (!user.is_active) {
      return res.status(401).json({ message: 'Account is deactivated' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      id: user.id,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;

    let profileQuery;
    let profileTable;

    switch (role) {
      case 'customer':
        profileTable = 'customers';
        profileQuery = `
          SELECT u.id, u.email, u.role, c.* 
          FROM users u 
          LEFT JOIN customers c ON u.id = c.user_id 
          WHERE u.id = $1
        `;
        break;
      case 'provider':
        profileTable = 'providers';
        profileQuery = `
          SELECT u.id, u.email, u.role, p.* 
          FROM users u 
          LEFT JOIN providers p ON u.id = p.user_id 
          WHERE u.id = $1
        `;
        break;
      case 'admin':
        profileQuery = `
          SELECT u.id, u.email, u.role, a.* 
          FROM users u 
          LEFT JOIN admins a ON u.id = a.user_id 
          WHERE u.id = $1
        `;
        break;
      case 'insurance':
        profileQuery = `
          SELECT u.id, u.email, u.role, i.* 
          FROM users u 
          LEFT JOIN insurers i ON u.id = i.user_id 
          WHERE u.id = $1
        `;
        break;
      default:
        return res.status(400).json({ message: 'Invalid user role' });
    }

    const result = await query(profileQuery, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update password
// @route   PUT /api/auth/update-password
// @access  Private
export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide current and new password' });
    }

    // Get user with password
    const result = await query(
      'SELECT password_hash FROM users WHERE id = $1',
      [userId]
    );

    const user = result.rows[0];

    // Check current password
    const isMatch = await bcrypt.compare(currentPassword, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    // Update password
    await query(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [passwordHash, userId]
    );

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Update password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const result = await query('SELECT id FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // TODO: Generate reset token and send email
    // For now, just return success
    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Reset password
// @route   PUT /api/auth/reset-password/:token
// @access  Public
export const resetPassword = async (req, res) => {
  try {
    // TODO: Implement password reset with token
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
