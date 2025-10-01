import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Download, TrendingUp, Assessment } from '@mui/icons-material';
import { useState } from 'react';

function AdminReporting() {
  const [period, setPeriod] = useState('month');

  const metrics = {
    arpu: 45.2,
    churn: 2.3,
    totalRequests: 1245,
    avgResolutionTime: 18,
    customerSatisfaction: 4.6,
  };

  const demandTrends = [
    { service: 'Plumbing', requests: 450, growth: 12 },
    { service: 'Electrical', requests: 380, growth: 8 },
    { service: 'HVAC', requests: 290, growth: 15 },
    { service: 'General Maintenance', requests: 125, growth: -3 },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Reporting & Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Business intelligence and performance metrics
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

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ARPU (Avg Revenue Per User)
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                ${metrics.arpu}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +5.2% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Churn Rate
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="error">
                {metrics.churn}%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Within acceptable range
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Total Requests
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {metrics.totalRequests}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This period
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Avg Resolution Time
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="info.main">
                {metrics.avgResolutionTime}m
              </Typography>
              <Typography variant="caption" color="success.main">
                -2 mins from last period
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Customer Satisfaction
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                {metrics.customerSatisfaction}/5
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Based on 850 reviews
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Provider Utilization
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                78%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Average across all providers
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Assessment color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Service Demand Trends
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Service Type</TableCell>
                      <TableCell align="right">Total Requests</TableCell>
                      <TableCell align="right">Growth Rate</TableCell>
                      <TableCell align="right">Avg Response Time</TableCell>
                      <TableCell align="right">Completion Rate</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {demandTrends.map((trend) => (
                      <TableRow key={trend.service} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {trend.service}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{trend.requests}</TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="body2"
                            color={trend.growth > 0 ? 'success.main' : 'error.main'}
                            fontWeight="bold"
                          >
                            {trend.growth > 0 ? '+' : ''}
                            {trend.growth}%
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          {Math.floor(Math.random() * 10) + 15} mins
                        </TableCell>
                        <TableCell align="right">
                          {Math.floor(Math.random() * 10) + 90}%
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

export default AdminReporting;
