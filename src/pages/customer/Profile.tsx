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
  IconButton,
} from '@mui/material';
import {
  Edit,
  Save,
  Cancel,
  PhotoCamera,
  Home,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

function CustomerProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    propertyType: 'Single Family Home',
    propertySize: '2,500 sq ft',
    yearBuilt: '1995',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: false,
    promotionalEmails: true,
  });

  const handleSave = () => {
    setEditMode(false);
    // Save logic here
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset form data
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Account Profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your personal information and property details
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Picture & Basic Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    fontSize: '3rem',
                    bgcolor: 'primary.main',
                    margin: '0 auto',
                  }}
                >
                  {profileData.firstName.charAt(0)}
                  {profileData.lastName.charAt(0)}
                </Avatar>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'background.paper',
                    '&:hover': { bgcolor: 'grey.100' },
                  }}
                  size="small"
                >
                  <PhotoCamera />
                </IconButton>
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {profileData.firstName} {profileData.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {profileData.email}
              </Typography>
              <Chip label="Premium Member" color="primary" sx={{ mt: 1 }} />
            </CardContent>
          </Card>

          {/* Subscription Status */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Subscription Status
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Plan"
                    secondary="Premium Home Care"
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    secondaryTypographyProps={{ variant: 'body1', fontWeight: 'bold' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Status"
                    secondary={<Chip label="Active" color="success" size="small" />}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Renewal Date"
                    secondary="Dec 31, 2025"
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    secondaryTypographyProps={{ variant: 'body1', fontWeight: 'bold' }}
                  />
                </ListItem>
              </List>
              <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Personal Information */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Personal Information
                </Typography>
                {!editMode ? (
                  <Button startIcon={<Edit />} onClick={() => setEditMode(true)}>
                    Edit
                  </Button>
                ) : (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<Cancel />} onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button variant="contained" startIcon={<Save />} onClick={handleSave}>
                      Save
                    </Button>
                  </Box>
                )}
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={profileData.firstName}
                    disabled={!editMode}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={profileData.lastName}
                    disabled={!editMode}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profileData.email}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Email color="action" sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={profileData.phone}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Phone color="action" sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Property Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    value={profileData.address}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <LocationOn color="action" sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    value={profileData.city}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="State"
                    value={profileData.state}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="ZIP Code"
                    value={profileData.zipCode}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Property Type"
                    value={profileData.propertyType}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Home color="action" sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Property Size"
                    value={profileData.propertySize}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Year Built"
                    value={profileData.yearBuilt}
                    disabled={!editMode}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Notification Preferences
              </Typography>
              <List>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.emailNotifications}
                        onChange={(e) =>
                          setNotifications({ ...notifications, emailNotifications: e.target.checked })
                        }
                      />
                    }
                    label="Email Notifications"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.smsNotifications}
                        onChange={(e) =>
                          setNotifications({ ...notifications, smsNotifications: e.target.checked })
                        }
                      />
                    }
                    label="SMS Notifications"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.pushNotifications}
                        onChange={(e) =>
                          setNotifications({ ...notifications, pushNotifications: e.target.checked })
                        }
                      />
                    }
                    label="Push Notifications"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.promotionalEmails}
                        onChange={(e) =>
                          setNotifications({ ...notifications, promotionalEmails: e.target.checked })
                        }
                      />
                    }
                    label="Promotional Emails"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Security */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Security & Authentication
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="outlined" fullWidth>
                  Change Password
                </Button>
                <Button variant="outlined" fullWidth>
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outlined" fullWidth>
                  Manage Login Sessions
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomerProfile;
