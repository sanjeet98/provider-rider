import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  LinearProgress,
  Paper,
} from '@mui/material';
import {
  Notifications,
  Star,
  Work,
  Schedule,
  AttachMoney,
  CheckCircle,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ProviderDashboard() {
  const navigate = useNavigate();

  const stats = {
    totalEarnings: 4850,
    monthlyEarnings: 1240,
    completedJobs: 48,
    pendingJobs: 3,
    rating: 4.8,
    responseTime: '12 mins',
  };

  const notifications = [
    { id: 1, type: 'new', message: 'New job request: Plumbing Emergency', time: '5 mins ago', urgent: true },
    { id: 2, type: 'accepted', message: 'Job accepted: Electrical Repair', time: '1 hour ago', urgent: false },
    { id: 3, type: 'completed', message: 'Payment received: $450', time: '2 hours ago', urgent: false },
  ];

  const upcomingJobs = [
    {
      id: 'JOB-001',
      type: 'Plumbing',
      customer: 'John Smith',
      location: '123 Main St, NY',
      time: '2:00 PM Today',
      status: 'Accepted',
      amount: 350,
    },
    {
      id: 'JOB-002',
      type: 'Electrical',
      customer: 'Sarah Johnson',
      location: '456 Oak Ave, NY',
      time: '4:30 PM Today',
      status: 'Accepted',
      amount: 280,
    },
    {
      id: 'JOB-003',
      type: 'HVAC',
      customer: 'Mike Davis',
      location: '789 Pine Rd, NY',
      time: '10:00 AM Tomorrow',
      status: 'Pending',
      amount: 420,
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Provider Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back! Here's your overview
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => navigate('/provider/jobs')}>
          View All Jobs
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <AttachMoney color="success" />
                <Typography variant="body2" color="text.secondary">
                  Total Earnings
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                ${stats.totalEarnings}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                +${stats.monthlyEarnings} this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Work color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Completed Jobs
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.completedJobs}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {stats.pendingJobs} pending
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Star color="warning" />
                <Typography variant="body2" color="text.secondary">
                  Rating
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.rating}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    sx={{
                      fontSize: 16,
                      color: star <= stats.rating ? 'warning.main' : 'grey.300',
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Schedule color="info" />
                <Typography variant="body2" color="text.secondary">
                  Avg Response Time
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.responseTime}
              </Typography>
              <Typography variant="caption" color="success.main">
                Excellent
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Notifications color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Recent Notifications
                </Typography>
              </Box>
              <List>
                {notifications.map((notification, index) => (
                  <Box key={notification.id}>
                    <ListItem
                      sx={{
                        bgcolor: notification.urgent ? 'error.light' : 'transparent',
                        borderRadius: 1,
                        mb: 1,
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor: notification.urgent ? 'error.main' : 'primary.main',
                          }}
                        >
                          {notification.type === 'new' && <Work />}
                          {notification.type === 'accepted' && <CheckCircle />}
                          {notification.type === 'completed' && <AttachMoney />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={notification.message}
                        secondary={notification.time}
                        primaryTypographyProps={{
                          fontWeight: notification.urgent ? 'bold' : 'normal',
                        }}
                      />
                      {notification.urgent && (
                        <Button variant="contained" size="small">
                          View
                        </Button>
                      )}
                    </ListItem>
                    {index < notifications.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
              <Button fullWidth sx={{ mt: 1 }}>
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Jobs */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Schedule color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Upcoming Jobs
                </Typography>
              </Box>
              <List>
                {upcomingJobs.map((job) => (
                  <Box key={job.id}>
                    <Paper sx={{ p: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                        <Box>
                          <Typography variant="body1" fontWeight="bold">
                            {job.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {job.id}
                          </Typography>
                        </Box>
                        <Chip
                          label={job.status}
                          size="small"
                          color={job.status === 'Accepted' ? 'success' : 'warning'}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                        <Typography variant="body2" color="text.secondary">
                          Customer:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {job.customer}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" color="primary" fontWeight="bold">
                          {job.time}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" color="success.main">
                          ${job.amount}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                ))}
              </List>
              <Button fullWidth variant="outlined" onClick={() => navigate('/provider/calendar')}>
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Earnings Summary */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Earnings Summary
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    This Week
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="success.main">
                    $890
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    This Month
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="success.main">
                    ${stats.monthlyEarnings}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Pending Payout
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="warning.main">
                    $450
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate('/provider/payments')}
                    >
                      Request Payout
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Progress to Next Payout ($500)
                </Typography>
                <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4 }} />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  $50 remaining
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProviderDashboard;
