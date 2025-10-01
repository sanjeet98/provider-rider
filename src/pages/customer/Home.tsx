import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Paper,
} from '@mui/material';
import {
  Warning as EmergencyIcon,
  Build as BuildIcon,
  Upgrade as UpgradeIcon,
  CheckCircle,
  TrendingUp,
  LocalShipping,
  History,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CustomerHome() {
  const navigate = useNavigate();

  const subscriptionData = {
    plan: 'Premium Home Care',
    status: 'Active',
    renewalDate: '2025-12-31',
    paygBalance: 250,
  };

  const usageData = {
    monthlyUsage: 450,
    monthlySavings: 120,
    usagePercentage: 65,
  };

  const recentServices = [
    { id: 1, type: 'Plumbing', date: '2025-09-28', status: 'Completed', provider: 'Mike Johnson' },
    { id: 2, type: 'Electrical', date: '2025-09-25', status: 'Completed', provider: 'Sarah Williams' },
    { id: 3, type: 'HVAC', date: '2025-09-20', status: 'Completed', provider: 'David Brown' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Welcome Back!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your home services, track requests, and view your subscription details.
      </Typography>

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' },
              background: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
              color: 'white',
            }}
            onClick={() => navigate('/customer/service-request')}
          >
            <CardContent>
              <EmergencyIcon sx={{ fontSize: 48, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Log Emergency Request
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                Get immediate assistance for urgent issues
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' },
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white',
            }}
            onClick={() => navigate('/customer/service-request')}
          >
            <CardContent>
              <BuildIcon sx={{ fontSize: 48, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Schedule Maintenance
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                Plan routine maintenance services
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' },
              background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
              color: 'white',
            }}
            onClick={() => navigate('/customer/service-request')}
          >
            <CardContent>
              <UpgradeIcon sx={{ fontSize: 48, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Upgrade Service
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                Enhance your home with upgrades
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Subscription Summary */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Subscription Package
                </Typography>
                <Chip label={subscriptionData.status} color="success" icon={<CheckCircle />} />
              </Box>
              <Typography variant="h5" color="primary" gutterBottom>
                {subscriptionData.plan}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Renewal Date
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {subscriptionData.renewalDate}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  PAYG Balance
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="success.main">
                  ${subscriptionData.paygBalance}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" size="small" fullWidth>
                  Manage
                </Button>
                <Button variant="contained" size="small" fullWidth>
                  Top-up PAYG
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Usage & Savings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Monthly Overview
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Usage
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    ${usageData.monthlyUsage}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={usageData.usagePercentage}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {usageData.usagePercentage}% of monthly allowance
                </Typography>
              </Box>
              <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUp />
                  <Box>
                    <Typography variant="body2">Monthly Savings</Typography>
                    <Typography variant="h5" fontWeight="bold">
                      ${usageData.monthlySavings}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

        {/* Real-time Partner ETA Map Widget */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocalShipping color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Active Service Tracking
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 200,
                  bgcolor: 'grey.100',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  No active service requests
                </Typography>
              </Box>
              <Button variant="contained" fullWidth onClick={() => navigate('/customer/service-request')}>
                Request Service
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recently Viewed Services */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <History color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Recent Services
                </Typography>
              </Box>
              <List>
                {recentServices.map((service, index) => (
                  <Box key={service.id}>
                    <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {service.type.charAt(0)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={service.type}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {service.provider}
                            </Typography>
                            {` — ${service.date}`}
                            <Chip
                              label={service.status}
                              size="small"
                              color="success"
                              sx={{ ml: 1, height: 20 }}
                            />
                          </>
                        }
                      />
                    </ListItem>
                    {index < recentServices.length - 1 && <Divider variant="inset" component="li" />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomerHome;
