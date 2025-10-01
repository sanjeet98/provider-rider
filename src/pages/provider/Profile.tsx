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
  Chip,
  List,
  ListItem,
  ListItemText,
  Rating,
  Divider,
  IconButton,
} from '@mui/material';
import { Edit, Save, Cancel, PhotoCamera, Verified } from '@mui/icons-material';

function ProviderProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData] = useState({
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 (555) 987-6543',
    address: '789 Service Lane, NY 10010',
    skills: ['Plumbing', 'Electrical', 'HVAC'],
    certifications: ['Licensed Plumber', 'Master Electrician', 'HVAC Certified'],
    experience: '10 years',
    rating: 4.8,
    completedJobs: 245,
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Provider Profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your professional information and credentials
      </Typography>

      <Grid container spacing={3}>
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
                  MJ
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
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, my: 1 }}>
                <Rating value={profileData.rating} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {profileData.rating}
                </Typography>
              </Box>
              <Chip label="Verified Provider" color="success" icon={<Verified />} sx={{ mb: 2 }} />
              <Divider sx={{ my: 2 }} />
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Completed Jobs"
                    secondary={profileData.completedJobs}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    secondaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Experience"
                    secondary={profileData.experience}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    secondaryTypographyProps={{ variant: 'body1', fontWeight: 'bold' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

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
                    <Button startIcon={<Cancel />} onClick={() => setEditMode(false)}>
                      Cancel
                    </Button>
                    <Button variant="contained" startIcon={<Save />} onClick={() => setEditMode(false)}>
                      Save
                    </Button>
                  </Box>
                )}
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" value={profileData.firstName} disabled={!editMode} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" value={profileData.lastName} disabled={!editMode} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" value={profileData.email} disabled={!editMode} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone" value={profileData.phone} disabled={!editMode} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" value={profileData.address} disabled={!editMode} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Skills & Certifications
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {profileData.skills.map((skill) => (
                    <Chip key={skill} label={skill} color="primary" />
                  ))}
                  <Chip label="+ Add Skill" variant="outlined" onClick={() => {}} />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Certifications
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {profileData.certifications.map((cert) => (
                    <Chip key={cert} label={cert} color="success" icon={<Verified />} />
                  ))}
                  <Chip label="+ Add Certification" variant="outlined" onClick={() => {}} />
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                KYC Status
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Identity Verification" secondary="Verified" />
                  <Chip label="Verified" color="success" size="small" icon={<Verified />} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Background Check" secondary="Completed" />
                  <Chip label="Completed" color="success" size="small" icon={<Verified />} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="License Verification" secondary="Active" />
                  <Chip label="Active" color="success" size="small" icon={<Verified />} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProviderProfile;
