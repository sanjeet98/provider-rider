import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { TrendingUp, People, Work, AttachMoney, Warning } from '@mui/icons-material';

function AdminDashboard() {
  const stats = {
    totalUsers: 1245,
    activeProviders: 89,
    activeRequests: 23,
    totalRevenue: 125400,
    monthlyGrowth: 12.5,
  };

  const recentActivity = [
    { id: 1, type: 'New User', description: 'John Doe registered', time: '5 mins ago' },
    { id: 2, type: 'Service Request', description: 'Emergency plumbing request', time: '12 mins ago' },
    { id: 3, type: 'Provider Joined', description: 'Mike Johnson verified', time: '1 hour ago' },
    { id: 4, type: 'Payment', description: 'Payment of $450 processed', time: '2 hours ago' },
  ];

  const alerts = [
    { id: 1, severity: 'high', message: 'SLA breach: JOB-123 exceeds response time', time: '10 mins ago' },
    { id: 2, severity: 'medium', message: 'Provider availability low in Zone 3', time: '1 hour ago' },
    { id: 3, severity: 'low', message: 'System maintenance scheduled for tonight', time: '3 hours ago' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        System overview and key metrics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <People color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Total Users
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.totalUsers}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +{stats.monthlyGrowth}% this month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <People color="secondary" />
                <Typography variant="body2" color="text.secondary">
                  Active Providers
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.activeProviders}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Online now
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Work color="info" />
                <Typography variant="body2" color="text.secondary">
                  Active Requests
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {stats.activeRequests}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                In progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <AttachMoney color="success" />
                <Typography variant="body2" color="text.secondary">
                  Total Revenue
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                ${(stats.totalRevenue / 1000).toFixed(1)}K
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Warning color="error" />
                <Typography variant="h6" fontWeight="bold">
                  System Alerts
                </Typography>
              </Box>
              {alerts.map((alert) => (
                <Paper
                  key={alert.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderLeft: 4,
                    borderColor:
                      alert.severity === 'high'
                        ? 'error.main'
                        : alert.severity === 'medium'
                        ? 'warning.main'
                        : 'info.main',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Box>
                      <Typography variant="body2" fontWeight="bold">
                        {alert.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {alert.time}
                      </Typography>
                    </Box>
                    <Chip
                      label={alert.severity}
                      size="small"
                      color={
                        alert.severity === 'high'
                          ? 'error'
                          : alert.severity === 'medium'
                          ? 'warning'
                          : 'info'
                      }
                    />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Recent Activity
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentActivity.map((activity) => (
                      <TableRow key={activity.id} hover>
                        <TableCell>
                          <Chip label={activity.type} size="small" />
                        </TableCell>
                        <TableCell>{activity.description}</TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;
