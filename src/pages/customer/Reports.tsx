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
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Assessment,
  Download,
  CalendarMonth,
} from '@mui/icons-material';
import { useState } from 'react';

function Reports() {
  const [period, setPeriod] = useState('month');

  const usageStats = [
    { service: 'Plumbing', count: 5, cost: 850, savings: 120 },
    { service: 'Electrical', count: 3, cost: 520, savings: 80 },
    { service: 'HVAC', count: 2, cost: 380, savings: 60 },
    { service: 'General Maintenance', count: 4, cost: 290, savings: 45 },
  ];

  const monthlyData = [
    { month: 'Jan', usage: 420, savings: 85 },
    { month: 'Feb', usage: 380, savings: 72 },
    { month: 'Mar', usage: 510, savings: 95 },
    { month: 'Apr', usage: 450, savings: 88 },
    { month: 'May', usage: 490, savings: 92 },
    { month: 'Jun', usage: 520, savings: 98 },
  ];

  const totalUsage = usageStats.reduce((sum, item) => sum + item.cost, 0);
  const totalSavings = usageStats.reduce((sum, item) => sum + item.savings, 0);
  const totalServices = usageStats.reduce((sum, item) => sum + item.count, 0);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Reports & Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your usage, savings, and service history
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Period</InputLabel>
            <Select value={period} label="Period" onChange={(e) => setPeriod(e.target.value)}>
              <MenuItem value="week">This Week</MenuItem>
              <MenuItem value="month">This Month</MenuItem>
              <MenuItem value="quarter">This Quarter</MenuItem>
              <MenuItem value="year">This Year</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" startIcon={<Download />}>
            Export Report
          </Button>
        </Box>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Assessment color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Total Services
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {totalServices}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +12% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <TrendingUp color="error" />
                <Typography variant="body2" color="text.secondary">
                  Total Usage
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" color="error.main">
                ${totalUsage}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingDown fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  -5% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <TrendingUp color="success" />
                <Typography variant="body2" color="text.secondary">
                  Total Savings
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                ${totalSavings}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +18% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <CalendarMonth color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Avg. Response Time
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                18m
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingDown fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  -3 mins from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Usage by Service Type */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Usage by Service Type
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Service Type</TableCell>
                      <TableCell align="center">Count</TableCell>
                      <TableCell align="right">Cost</TableCell>
                      <TableCell align="right">Savings</TableCell>
                      <TableCell align="right">Net Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {usageStats.map((stat) => (
                      <TableRow key={stat.service} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {stat.service}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">{stat.count}</TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" color="error.main">
                            ${stat.cost}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" color="success.main">
                            ${stat.savings}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" fontWeight="bold">
                            ${stat.cost - stat.savings}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" fontWeight="bold">
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body1" fontWeight="bold">
                          {totalServices}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body1" fontWeight="bold" color="error.main">
                          ${totalUsage}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body1" fontWeight="bold" color="success.main">
                          ${totalSavings}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body1" fontWeight="bold">
                          ${totalUsage - totalSavings}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Savings Dashboard */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Savings Breakdown
              </Typography>
              <Box sx={{ my: 3 }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                    color: 'white',
                  }}
                >
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Total Savings This Month
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" sx={{ my: 1 }}>
                    ${totalSavings}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.9 }}>
                    {((totalSavings / totalUsage) * 100).toFixed(1)}% of total usage
                  </Typography>
                </Paper>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Savings Sources
                </Typography>
                {[
                  { label: 'Subscription Discount', amount: 180 },
                  { label: 'Insurance Coverage', amount: 120 },
                  { label: 'Promotions', amount: 5 },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2">{item.label}</Typography>
                    <Typography variant="body2" fontWeight="bold" color="success.main">
                      ${item.amount}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Trend */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Monthly Trend
              </Typography>
              <Box
                sx={{
                  height: 300,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                    Chart Visualization (Integration with Chart Library)
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {monthlyData.map((data) => (
                      <Grid item xs={2} key={data.month}>
                        <Paper sx={{ p: 1, textAlign: 'center' }}>
                          <Typography variant="caption" color="text.secondary">
                            {data.month}
                          </Typography>
                          <Typography variant="body2" fontWeight="bold" color="error.main">
                            ${data.usage}
                          </Typography>
                          <Typography variant="caption" color="success.main">
                            -${data.savings}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reports;
