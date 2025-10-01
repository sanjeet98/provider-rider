import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  Rating,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Snackbar,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import {
  Send,
  CheckCircle,
  Feedback as FeedbackIcon,
  Star,
  BugReport,
  Lightbulb,
  ThumbUp,
} from '@mui/icons-material';
import { useUser } from '../context/UserContext';

function Feedback() {
  const { userName, role } = useUser();
  const [formData, setFormData] = useState({
    name: userName || '',
    email: '',
    feedbackType: 'general',
    rating: 0,
    subject: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback', icon: <FeedbackIcon /> },
    { value: 'bug', label: 'Bug Report', icon: <BugReport /> },
    { value: 'feature', label: 'Feature Request', icon: <Lightbulb /> },
    { value: 'compliment', label: 'Compliment', icon: <ThumbUp /> },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Feedback description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Please provide at least 10 characters';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', formData);
      setSubmitSuccess(true);
      setLoading(false);

      // Reset form
      setFormData({
        name: userName || '',
        email: '',
        feedbackType: 'general',
        rating: 0,
        subject: '',
        description: '',
      });
      setErrors({});
    }, 1500);

    // TODO: Replace with actual API call
    // try {
    //   await api.post('/feedback', formData);
    //   setSubmitSuccess(true);
    //   // Reset form
    // } catch (error) {
    //   console.error('Failed to submit feedback:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <FeedbackIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" gutterBottom fontWeight="bold">
            We Value Your Feedback
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Help us improve UPKIIP by sharing your thoughts, suggestions, or reporting issues
          </Typography>
        </Box>

        {/* Quick Stats */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  1,234
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Feedback Received
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" color="success.main" fontWeight="bold">
                  89%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Satisfaction Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" color="info.main" fontWeight="bold">
                  156
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Features Improved
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Your Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                placeholder="John Doe"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="john@example.com"
              />
            </Grid>

            {/* Feedback Type */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Feedback Type</FormLabel>
                <RadioGroup
                  row
                  value={formData.feedbackType}
                  onChange={(e) => handleChange('feedbackType', e.target.value)}
                >
                  {feedbackTypes.map((type) => (
                    <FormControlLabel
                      key={type.value}
                      value={type.value}
                      control={<Radio />}
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {type.icon}
                          {type.label}
                        </Box>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Rating */}
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.rating}>
                <FormLabel component="legend" sx={{ mb: 1 }}>
                  Overall Rating *
                </FormLabel>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Rating
                    size="large"
                    value={formData.rating}
                    onChange={(_, value) => handleChange('rating', value)}
                    icon={<Star fontSize="inherit" />}
                    emptyIcon={<Star fontSize="inherit" />}
                  />
                  {formData.rating > 0 && (
                    <Chip
                      label={
                        formData.rating === 5
                          ? 'Excellent!'
                          : formData.rating === 4
                          ? 'Good'
                          : formData.rating === 3
                          ? 'Average'
                          : formData.rating === 2
                          ? 'Below Average'
                          : 'Poor'
                      }
                      color={
                        formData.rating >= 4
                          ? 'success'
                          : formData.rating === 3
                          ? 'warning'
                          : 'error'
                      }
                    />
                  )}
                </Box>
                {errors.rating && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                    {errors.rating}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Subject */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Subject"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                error={!!errors.subject}
                helperText={errors.subject}
                placeholder="Brief summary of your feedback"
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Feedback Description"
                multiline
                rows={6}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                error={!!errors.description}
                helperText={
                  errors.description ||
                  `${formData.description.length} characters (minimum 10 required)`
                }
                placeholder="Please provide detailed feedback about your experience..."
              />
            </Grid>

            {/* User Info Display */}
            <Grid item xs={12}>
              <Alert severity="info" icon={false}>
                <Typography variant="body2">
                  <strong>Submitting as:</strong> {userName} ({role} portal)
                </Typography>
              </Alert>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                startIcon={loading ? null : <Send />}
                sx={{ py: 1.5 }}
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Additional Info */}
        <Box sx={{ mt: 4, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>What happens next?</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            • Our team reviews all feedback within 24-48 hours<br />
            • You'll receive an email confirmation<br />
            • For urgent issues, please contact support directly<br />
            • Feature requests are evaluated for future updates
          </Typography>
        </Box>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={() => setSubmitSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSubmitSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
          icon={<CheckCircle />}
        >
          <Typography variant="body1" fontWeight="bold">
            Thank you for your feedback!
          </Typography>
          <Typography variant="body2">
            We've received your feedback and will review it shortly.
          </Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Feedback;
