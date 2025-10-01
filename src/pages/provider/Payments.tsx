import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
  Paper,
} from '@mui/material';
import { AttachMoney, TrendingUp, AccountBalance, Download } from '@mui/icons-material';

function ProviderPayments() {
  const earnings = {
    available: 450,
    pending: 320,
    total: 4850,
    thisMonth: 1240,
  };

  const transactions = [
    { id: 'PAY-001', date: '2025-09-28', description: 'Job Completion - JOB-005', amount: 320, status: 'completed' },
    { id: 'PAY-002', date: '2025-09-25', description: 'Payout to Bank Account', amount: -800, status: 'completed' },
    { id: 'PAY-003', date: '2025-09-20', description: 'Job Completion - JOB-004', amount: 450, status: 'completed' },
    { id: 'PAY-004', date: '2025-09-15', description: 'Job Completion - JOB-003', amount: 280, status: 'pending' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Earnings & Payouts
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your earnings and request payouts
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AccountBalance />}>
          Request Payout
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)', color: 'white' }}>
            <CardContent>
              <AttachMoney sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Available Balance
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ my: 1 }}>
                ${earnings.available}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.9 }}>
                Ready for payout
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Pending Earnings
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="warning.main">
                ${earnings.pending}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Processing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This Month
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                ${earnings.thisMonth}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <TrendingUp fontSize="small" color="success" />
                <Typography variant="caption" color="success.main">
                  +15% from last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Earnings
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                ${earnings.total}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                All time
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Payout Progress
              </Typography>
              <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Next payout threshold: $500</Typography>
                  <Typography variant="body2" fontWeight="bold">
                    ${earnings.available} / $500
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(earnings.available / 500) * 100}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  ${500 - earnings.available} more to reach minimum payout
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Transaction History
                </Typography>
                <Button startIcon={<Download />} size="small">
                  Export
                </Button>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Transaction ID</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((txn) => (
                      <TableRow key={txn.id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {txn.id}
                          </Typography>
                        </TableCell>
                        <TableCell>{txn.date}</TableCell>
                        <TableCell>{txn.description}</TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            color={txn.amount > 0 ? 'success.main' : 'error.main'}
                          >
                            {txn.amount > 0 ? '+' : ''}${Math.abs(txn.amount)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={txn.status}
                            size="small"
                            color={txn.status === 'completed' ? 'success' : 'warning'}
                          />
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

export default ProviderPayments;
