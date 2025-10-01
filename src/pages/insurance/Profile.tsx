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
  Business,
  Email,
  Phone,
  Badge,
  Security,
  Notifications,
  Save,
  Edit,
  Assessment,
} from '@mui/icons-material';

function InsuranceProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    companyName: 'UPKIIP Insurance Partners',
    contactName: 'Insurance Manager',
    email: 'insurance@upkiip.com',
    phone: '+1 (555) 987-6543',
    policyNumber: 'INS-2024-001',
    department: 'Claims Processing',
    licenseNumber: 'LIC-123456',
    joinDate: '2024-01-01',
  });

  const [settings, setSettings] = useState({
    claimNotifications: true,
    approvalAlerts: true,
    weeklyReports: true,
    monthlyAnalytics: true,
  });

  const handleSave = () => {
    setEditMode(false);
    // TODO: Save to backend
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Insurance Profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your insurance company profile and settings
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
                  bgcolor: 'success.main',
                  fontSize: '3rem',
                }}
              >
                <Business sx={{ fontSize: '4rem' }} />
              </Avatar>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {profile.companyName}
              </Typography>
              <Chip label="Insurance Partner" color="success" sx={{ mb: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {profile.department}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                Policy: {profile.policyNumber}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                Partner Since: {new Date(profile.joinDate).toLocaleDateString()}
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
                Claims Overview
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Total Claims"
                    secondary="2,456"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Approved"
                    secondary="2,134 (87%)"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Pending Review"
                    secondary="156"
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Total Payout"
                    secondary="$1,245,678"
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
                <Business color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Company Information
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    value={profile.companyName}
                    onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
                      startAdornment: <Business sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contact Name"
                    value={profile.contactName}
                    onChange={(e) => setProfile({ ...profile, contactName: e.target.value })}
                    InputProps={{
                      readOnly: !editMode,
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
                    label="Policy Number"
                    value={profile.policyNumber}
                    InputProps={{
                      readOnly: true,
                      startAdornment: <Badge sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="License Number"
                    value={profile.licenseNumber}
                    InputProps={{
                      readOnly: true,
                      startAdornment: <Security sx={{ mr: 1, color: 'action.active' }} />,
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
                        checked={settings.claimNotifications}
                        onChange={(e) =>
                          setSettings({ ...settings, claimNotifications: e.target.checked })
                        }
                      />
                    }
                    label="New Claim Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.approvalAlerts}
                        onChange={(e) =>
                          setSettings({ ...settings, approvalAlerts: e.target.checked })
                        }
                      />
                    }
                    label="Approval Alerts"
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
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.monthlyAnalytics}
                        onChange={(e) =>
                          setSettings({ ...settings, monthlyAnalytics: e.target.checked })
                        }
                      />
                    }
                    label="Monthly Analytics"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Security & Analytics */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Security color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Security & Access
                </Typography>
              </Box>

              <Button variant="outlined" sx={{ mr: 2, mb: 2 }}>
                Change Password
              </Button>
              <Button variant="outlined" sx={{ mb: 2 }}>
                Manage API Keys
              </Button>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Assessment color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Quick Actions
                </Typography>
              </Box>

              <Button variant="outlined" sx={{ mr: 2 }}>
                Download Claims Report
              </Button>
              <Button variant="outlined">
                Export Analytics
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body2" color="text.secondary">
                Last login: {new Date().toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Account Status: Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InsuranceProfile;
