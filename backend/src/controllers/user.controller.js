import { query } from '../config/database.js';

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;

    let profileQuery;
    
    switch (role) {
      case 'customer':
        profileQuery = `
          SELECT u.id, u.email, u.role, c.* 
          FROM users u 
          LEFT JOIN customers c ON u.id = c.user_id 
          WHERE u.id = $1
        `;
        break;
      case 'provider':
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
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;
    const updates = req.body;

    let updateQuery;
    let params = [];

    switch (role) {
      case 'customer':
        updateQuery = `
          UPDATE customers 
          SET first_name = $1, last_name = $2, phone = $3, address = $4, city = $5, state = $6, zip_code = $7
          WHERE user_id = $8
          RETURNING *
        `;
        params = [
          updates.firstName, updates.lastName, updates.phone, updates.address,
          updates.city, updates.state, updates.zipCode, userId
        ];
        break;
      case 'provider':
        updateQuery = `
          UPDATE providers 
          SET first_name = $1, last_name = $2, phone = $3, address = $4
          WHERE user_id = $5
          RETURNING *
        `;
        params = [updates.firstName, updates.lastName, updates.phone, updates.address, userId];
        break;
      default:
        return res.status(400).json({ message: 'Profile update not supported for this role' });
    }

    const result = await query(updateQuery, params);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await query(
      'SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50',
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get notifications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const markNotificationRead = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    await query(
      'UPDATE notifications SET is_read = true WHERE id = $1 AND user_id = $2',
      [id, userId]
    );
    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error('Mark notification read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
