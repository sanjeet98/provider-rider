import { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
  Divider,
  Alert,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Business,
  Person,
  LocalShipping,
  HealthAndSafety,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Login() {
  const navigate = useNavigate();
  const { setRole } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Password validation function
  const validatePassword = (pass: string): boolean => {
    if (pass.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(pass)) {
      setPasswordError('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)');
      return false;
    }
    
    setPasswordError('');
    return true;
  };

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPasswordError('');
    setEmailError('');

    // Validate email
    if (!validateEmail(email)) {
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // Demo: Determine role based on email
        let userRole: 'customer' | 'provider' | 'admin' | 'insurance' = 'customer';
        
        if (email.includes('provider')) {
          userRole = 'provider';
        } else if (email.includes('admin')) {
          userRole = 'admin';
        } else if (email.includes('insurance')) {
          userRole = 'insurance';
        }

        setRole(userRole);
        
        // Navigate based on role
        if (userRole === 'customer') {
          navigate('/customer/home');
        } else if (userRole === 'insurance') {
          navigate('/insurance/claims');
        } else {
          navigate(`/${userRole}/dashboard`);
        }
      } else {
        setError('Please enter both email and password');
      }
      setLoading(false);
    }, 1000);
  };

  const handleQuickLogin = (role: 'customer' | 'provider' | 'admin' | 'insurance') => {
    setRole(role);
    if (role === 'customer') {
      navigate('/customer/home');
    } else if (role === 'insurance') {
      navigate('/insurance/claims');
    } else {
      navigate(`/${role}/dashboard`);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Branding */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ color: 'white', pr: 4 }}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                UPKIIP
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Your Complete Service Management Platform
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Person />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      For Customers
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Request services, track progress, manage subscriptions
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Business />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      For Providers
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Manage jobs, track earnings, grow your business
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <HealthAndSafety />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Insurance Integration
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Seamless claims processing and analytics
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Login Form */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                maxWidth: 480,
                mx: 'auto',
                borderRadius: 4,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Logo for mobile */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mb: 3 }}>
                  <Typography variant="h4" fontWeight="bold" color="primary">
                    UPKIIP
                  </Typography>
                </Box>

                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Sign in to access your account
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleLogin}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    onBlur={() => validateEmail(email)}
                    error={!!emailError}
                    helperText={emailError}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError('');
                    }}
                    onBlur={() => validatePassword(password)}
                    error={!!passwordError}
                    helperText={passwordError || 'Min 8 characters with special character (!@#$%^&*)'}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          size="small"
                        />
                      }
                      label={<Typography variant="body2">Remember me</Typography>}
                    />
                    <Link href="#" variant="body2" underline="hover">
                      Forgot password?
                    </Link>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      mb: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>

                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Don't have an account?{' '}
                      <Link href="#" underline="hover" fontWeight="bold">
                        Sign up
                      </Link>
                    </Typography>
                  </Box>
                </form>

                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    Quick Demo Access
                  </Typography>
                </Divider>

                {/* Quick login buttons */}
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 3,
                        },
                      }}
                      onClick={() => handleQuickLogin('customer')}
                    >
                      <Person color="primary" sx={{ fontSize: 32, mb: 0.5 }} />
                      <Typography variant="caption" display="block" fontWeight="bold">
                        Customer
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 3,
                        },
                      }}
                      onClick={() => handleQuickLogin('provider')}
                    >
                      <Business color="secondary" sx={{ fontSize: 32, mb: 0.5 }} />
                      <Typography variant="caption" display="block" fontWeight="bold">
                        Provider
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 3,
                        },
                      }}
                      onClick={() => handleQuickLogin('admin')}
                    >
                      <LocalShipping color="info" sx={{ fontSize: 32, mb: 0.5 }} />
                      <Typography variant="caption" display="block" fontWeight="bold">
                        Admin
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 3,
                        },
                      }}
                      onClick={() => handleQuickLogin('insurance')}
                    >
                      <HealthAndSafety color="success" sx={{ fontSize: 32, mb: 0.5 }} />
                      <Typography variant="caption" display="block" fontWeight="bold">
                        Insurance
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Footer */}
            <Typography
              variant="caption"
              color="white"
              sx={{ display: 'block', textAlign: 'center', mt: 3, opacity: 0.8 }}
            >
              © 2025 UPKIIP. All rights reserved. | Privacy Policy | Terms of Service
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Login;
