import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
  TextField,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Home,
  RequestPage,
  Assessment,
  Payment,
  Support,
  Dashboard,
  Work,
  CalendarMonth,
  AdminPanelSettings,
  People,
  LocalShipping,
  BarChart,
  Description,
} from '@mui/icons-material';
import { useUser, UserRole } from '../context/UserContext';
import ConsentBanner from '../components/ConsentBanner';

const roleMenuItems: Record<UserRole, { label: string; path: string; icon: JSX.Element }[]> = {
  customer: [
    { label: 'Home', path: '/customer/home', icon: <Home /> },
    { label: 'Service Request', path: '/customer/service-request', icon: <RequestPage /> },
    { label: 'Claims', path: '/customer/claims', icon: <Description /> },
    { label: 'Payments', path: '/customer/payments', icon: <Payment /> },
    { label: 'Reports', path: '/customer/reports', icon: <Assessment /> },
    { label: 'Profile', path: '/customer/profile', icon: <AccountCircle /> },
    { label: 'Support', path: '/customer/support', icon: <Support /> },
  ],
  provider: [
    { label: 'Dashboard', path: '/provider/dashboard', icon: <Dashboard /> },
    { label: 'Jobs', path: '/provider/jobs', icon: <Work /> },
    { label: 'Calendar', path: '/provider/calendar', icon: <CalendarMonth /> },
    { label: 'Payments', path: '/provider/payments', icon: <Payment /> },
    { label: 'Profile', path: '/provider/profile', icon: <AccountCircle /> },
    { label: 'Support', path: '/provider/support', icon: <Support /> },
  ],
  admin: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: <Dashboard /> },
    { label: 'Dispatch', path: '/admin/dispatch', icon: <LocalShipping /> },
    { label: 'Reporting', path: '/admin/reporting', icon: <BarChart /> },
    { label: 'User Management', path: '/admin/users', icon: <People /> },
  ],
  insurance: [
    { label: 'Claims', path: '/insurance/claims', icon: <Description /> },
    { label: 'Analytics', path: '/insurance/analytics', icon: <BarChart /> },
  ],
};

function AppLayout() {
  const { role, setRole, userName } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElRole, setAnchorElRole] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenRoleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRole(event.currentTarget);
  };

  const handleCloseRoleMenu = () => {
    setAnchorElRole(null);
  };

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    handleCloseRoleMenu();
    // Navigate to appropriate landing page for each role
    if (newRole === 'customer') {
      navigate('/customer/home');
    } else if (newRole === 'insurance') {
      navigate('/insurance/claims');
    } else {
      navigate(`/${newRole}/dashboard`);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
    setNotificationOpen(true);
  };

  const menuItems = roleMenuItems[role];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="sticky" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile Menu Icon */}
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 4,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              UNKIIP
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {menuItems.slice(0, 5).map((item) => (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Search Bar */}
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 2 }}
            >
              <TextField
                size="small"
                placeholder="Global Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
            </Box>

            {/* Notifications */}
            <Tooltip title="Notifications">
              <IconButton color="inherit" sx={{ mr: 1 }}>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Role Switcher */}
            <Tooltip title="Switch Role">
              <Button
                onClick={handleOpenRoleMenu}
                sx={{
                  color: 'white',
                  textTransform: 'capitalize',
                  display: { xs: 'none', sm: 'flex' },
                  mr: 1,
                }}
                startIcon={<AdminPanelSettings />}
              >
                {role}
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="role-menu"
              anchorEl={anchorElRole}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElRole)}
              onClose={handleCloseRoleMenu}
            >
              <MenuItem onClick={() => handleRoleChange('customer')}>Customer</MenuItem>
              <MenuItem onClick={() => handleRoleChange('provider')}>Service Provider</MenuItem>
              <MenuItem onClick={() => handleRoleChange('admin')}>Admin</MenuItem>
              <MenuItem onClick={() => handleRoleChange('insurance')}>Insurance</MenuItem>
            </Menu>

            {/* User Menu */}
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userName}>{userName.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="user-menu"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => { handleCloseUserMenu(); navigate(`/${role}/profile`); }}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => { handleCloseUserMenu(); navigate(`/${role}/support`); }}>
                Support
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h6" fontWeight="bold">
              UNKIIP
            </Typography>
            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>
              {role} Portal
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleNavigation(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', py: 3 }}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 UNKIIP. All rights reserved. | Privacy Policy | Terms of Service | GDPR/POPIA Compliance
          </Typography>
        </Container>
      </Box>

      {/* Consent Banner */}
      <ConsentBanner />

      {/* Search Notification */}
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={() => setNotificationOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setNotificationOpen(false)} severity="info" sx={{ width: '100%' }}>
          Search feature coming soon! Searching for: "{searchQuery}"
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AppLayout;
