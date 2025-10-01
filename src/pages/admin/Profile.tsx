import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Switch,
  FormControlLabel,
  Chip,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Badge,
  Security,
  Notifications,
  Save,
  Edit,
} from '@mui/icons-material';

function AdminProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@upkiip.com',
    phone: '+1 (555) 123-4567',
    role: 'System Administrator',
    department: 'Operations',
    employeeId: 'ADM-001',
    joinDate: '2024-01-15',
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    systemAlerts: true,
    weeklyReports: true,
  });

  const handleSave = () => {
    setEditMode(false);
    // TODO: Save to backend
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Admin Profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your admin account settings and preferences
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                  fontSize: '3rem',
                }}
              >
                {profile.name.charAt(0)}
              </Avatar>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {profile.name}
              </Typography>
              <Chip label={profile.role} color="primary" sx={{ mb: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {profile.department}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                Employee ID: {profile.employeeId}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                Joined: {new Date(profile.joinDate).toLocaleDateString()}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? 'Cancel Edit' : 'Edit Profile'}
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quick Stats
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Total Users"
                    secondary="1,234"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Active Services"
                    secondary="456"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="System Uptime"
                    secondary="99.9%"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Person color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Personal Information
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
                      startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Employee ID"
                    value={profile.employeeId}
                    InputProps={{
                      readOnly: true,
                      startAdornment: <Badge sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
                      startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
                      startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Role"
                    value={profile.role}
                    InputProps={{
                      readOnly: true,
                      startAdornment: <Security sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    value={profile.department}
                    onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
                    }}
                  />
                </Grid>
              </Grid>

              {editMode && (
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Save />}
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Notifications color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Notification Preferences
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.emailNotifications}
                        onChange={(e) =>
                          setSettings({ ...settings, emailNotifications: e.target.checked })
                        }
                      />
                    }
                    label="Email Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.smsNotifications}
                        onChange={(e) =>
                          setSettings({ ...settings, smsNotifications: e.target.checked })
                        }
                      />
                    }
                    label="SMS Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.systemAlerts}
                        onChange={(e) =>
                          setSettings({ ...settings, systemAlerts: e.target.checked })
                        }
                      />
                    }
                    label="System Alerts"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.weeklyReports}
                        onChange={(e) =>
                          setSettings({ ...settings, weeklyReports: e.target.checked })
                        }
                      />
                    }
                    label="Weekly Reports"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Security */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Security color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Security Settings
                </Typography>
              </Box>

              <Button variant="outlined" sx={{ mr: 2 }}>
                Change Password
              </Button>
              <Button variant="outlined">
                Enable Two-Factor Authentication
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body2" color="text.secondary">
                Last login: {new Date().toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                IP Address: 192.168.1.1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminProfile;
