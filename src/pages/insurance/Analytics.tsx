import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import { TrendingUp, TrendingDown, Download, Assessment } from '@mui/icons-material';
import { useState } from 'react';

function InsuranceAnalytics() {
  const [period, setPeriod] = useState('month');

  const metrics = {
    totalClaims: 145,
    approvalRate: 87,
    avgClaimAmount: 385,
    totalPayout: 55825,
    claimsFrequency: 12.5,
  };

  const claimsByType = [
    { type: 'Plumbing', count: 52, amount: 18200, avgCost: 350 },
    { type: 'Electrical', count: 38, amount: 12160, avgCost: 320 },
    { type: 'HVAC', count: 31, amount: 13020, avgCost: 420 },
    { type: 'General Maintenance', count: 24, amount: 6720, avgCost: 280 },
  ];

  const predictiveInsights = [
    { insight: 'Plumbing claims expected to increase by 15% next quarter', severity: 'warning' },
    { insight: 'HVAC maintenance claims peak in summer months', severity: 'info' },
    { insight: 'High-risk customers identified: 12 accounts', severity: 'error' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Insurance Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Claims analytics and predictive insights
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
                Total Claims
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {metrics.totalClaims}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +8% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Approval Rate
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                {metrics.approvalRate}%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Industry avg: 82%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Avg Claim Amount
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                ${metrics.avgClaimAmount}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                <TrendingDown fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  -3% from last period
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Total Payout
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="error.main">
                ${metrics.totalPayout.toLocaleString()}
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
                Claims Frequency
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {metrics.claimsFrequency}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Claims per 100 policies
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Processing Time
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="info.main">
                2.3 days
              </Typography>
              <Typography variant="caption" color="success.main">
                -0.5 days from last period
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Assessment color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Claims by Service Type
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Service Type</TableCell>
                      <TableCell align="right">Count</TableCell>
                      <TableCell align="right">Total Amount</TableCell>
                      <TableCell align="right">Avg Cost</TableCell>
                      <TableCell align="right">% of Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {claimsByType.map((item) => (
                      <TableRow key={item.type} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {item.type}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{item.count}</TableCell>
                        <TableCell align="right">${item.amount.toLocaleString()}</TableCell>
                        <TableCell align="right">${item.avgCost}</TableCell>
                        <TableCell align="right">
                          {((item.count / metrics.totalClaims) * 100).toFixed(1)}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Predictive Insights
              </Typography>
              {predictiveInsights.map((item, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderLeft: 4,
                    borderColor:
                      item.severity === 'error'
                        ? 'error.main'
                        : item.severity === 'warning'
                        ? 'warning.main'
                        : 'info.main',
                  }}
                >
                  <Typography variant="body2">{item.insight}</Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Claims Trend
              </Typography>
              <Box
                sx={{
                  height: 300,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Chart Visualization (Integration with Chart Library)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InsuranceAnalytics;
