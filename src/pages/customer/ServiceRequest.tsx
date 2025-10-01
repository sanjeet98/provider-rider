import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Avatar,
  Rating,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  LocationOn,
  CalendarMonth,
  CheckCircle,
  Star,
  LocalShipping,
} from '@mui/icons-material';

const steps = ['Service Details', 'Match Partner', 'Confirm & Track'];

function ServiceRequest() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    serviceType: '',
    location: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
  });

  const matchedPartner = {
    name: 'John Smith',
    rating: 4.8,
    skills: ['Plumbing', 'Electrical', 'HVAC'],
    completedJobs: 245,
    eta: '25 mins',
    distance: '3.2 km',
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (field: string) => (event: any) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Service Type</InputLabel>
                <Select
                  value={formData.serviceType}
                  label="Service Type"
                  onChange={handleChange('serviceType')}
                >
                  <MenuItem value="emergency">Emergency</MenuItem>
                  <MenuItem value="maintenance">Maintenance</MenuItem>
                  <MenuItem value="upgrade">Upgrade</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={handleChange('location')}
                placeholder="Enter your address"
                InputProps={{
                  startAdornment: <LocationOn color="action" sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                value={formData.description}
                onChange={handleChange('description')}
                multiline
                rows={4}
                placeholder="Describe the issue or service needed"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preferred Date"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange('preferredDate')}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: <CalendarMonth color="action" sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preferred Time"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange('preferredTime')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Best Matched Partner
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: '2rem' }}>
                    {matchedPartner.name.charAt(0)}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" fontWeight="bold">
                    {matchedPartner.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={matchedPartner.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {matchedPartner.rating} ({matchedPartner.completedJobs} jobs)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {matchedPartner.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" color="primary" variant="outlined" />
                    ))}
                  </Box>
                </Grid>
                <Grid item>
                  <Paper sx={{ p: 2, bgcolor: 'success.light', textAlign: 'center' }}>
                    <LocalShipping sx={{ fontSize: 40, color: 'success.main' }} />
                    <Typography variant="h6" fontWeight="bold" color="success.main">
                      {matchedPartner.eta}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ETA
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Distance: {matchedPartner.distance}
                </Typography>
                <Box
                  sx={{
                    height: 200,
                    bgcolor: 'grey.100',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Map View (Integration Placeholder)
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Paper sx={{ p: 3, bgcolor: 'success.light', mb: 3, textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Request Submitted Successfully!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your service request has been confirmed. Track the status below.
              </Typography>
            </Paper>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Request Status
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Partner en route</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {matchedPartner.eta}
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={60} sx={{ height: 8, borderRadius: 4 }} />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Service Details
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {formData.serviceType || 'Emergency'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {formData.location || '123 Main St'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Scheduled: {formData.preferredDate || 'ASAP'} {formData.preferredTime}
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Assigned Partner
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {matchedPartner.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight="bold">
                        {matchedPartner.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Star sx={{ fontSize: 16, color: 'warning.main' }} />
                        <Typography variant="caption">{matchedPartner.rating}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Service Request
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Submit a new service request and get matched with the best provider.
      </Typography>

      <Card>
        <CardContent>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStepContent()}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 2 ? 'Confirm Request' : 'Next'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ServiceRequest;
