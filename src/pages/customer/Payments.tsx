import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  Paper,
} from '@mui/material';
import {
  CreditCard,
  AccountBalance,
  Wallet,
  Add as AddIcon,
  Delete,
  Edit,
  LocalOffer,
} from '@mui/icons-material';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'payment' | 'refund' | 'topup';
  status: 'completed' | 'pending';
}

function Payments() {
  const [openAddPayment, setOpenAddPayment] = useState(false);
  const [openTopUp, setOpenTopUp] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const paymentMethods = [
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', isDefault: true },
    { id: 2, type: 'card', last4: '8888', brand: 'Mastercard', isDefault: false },
    { id: 3, type: 'bank', accountNumber: '****1234', bank: 'Chase Bank', isDefault: false },
  ];

  const transactions: Transaction[] = [
    {
      id: 'TXN-001',
      date: '2025-09-28',
      description: 'Plumbing Service - Emergency',
      amount: -450,
      type: 'payment',
      status: 'completed',
    },
    {
      id: 'TXN-002',
      date: '2025-09-25',
      description: 'PAYG Top-up',
      amount: 200,
      type: 'topup',
      status: 'completed',
    },
    {
      id: 'TXN-003',
      date: '2025-09-20',
      description: 'Refund - Cancelled Service',
      amount: 150,
      type: 'refund',
      status: 'completed',
    },
    {
      id: 'TXN-004',
      date: '2025-09-15',
      description: 'Monthly Subscription',
      amount: -99,
      type: 'payment',
      status: 'completed',
    },
  ];

  const promotions = [
    { code: 'SAVE20', discount: '20% off next service', expires: '2025-10-31' },
    { code: 'REFER50', discount: '$50 credit', expires: '2025-11-15' },
  ];

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'payment':
        return 'error';
      case 'refund':
        return 'success';
      case 'topup':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Payments & Billing
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage your payment methods, view transactions, and access promotions
      </Typography>

      <Grid container spacing={3}>
        {/* Wallet Balance */}
        <Grid item xs={12} md={4}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent>
              <Wallet sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                PAYG Wallet Balance
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ my: 2 }}>
                $250
              </Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                onClick={() => setOpenTopUp(true)}
              >
                Top Up
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Stats */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This Month
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="error.main">
                    -$549
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Total Savings
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="success.main">
                    $1,240
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Next Billing
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    Oct 15
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Payment Methods */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Payment Methods
                </Typography>
                <Button startIcon={<AddIcon />} onClick={() => setOpenAddPayment(true)}>
                  Add New
                </Button>
              </Box>
              {paymentMethods.map((method) => (
                <Paper key={method.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  {method.type === 'card' ? (
                    <CreditCard color="primary" sx={{ fontSize: 40 }} />
                  ) : (
                    <AccountBalance color="primary" sx={{ fontSize: 40 }} />
                  )}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" fontWeight="bold">
                      {method.type === 'card' ? `${method.brand} •••• ${method.last4}` : method.bank}
                    </Typography>
                    {method.isDefault && (
                      <Chip label="Default" size="small" color="primary" sx={{ mt: 0.5 }} />
                    )}
                  </Box>
                  <IconButton size="small">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete />
                  </IconButton>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Promotions */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocalOffer color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Active Promotions
                </Typography>
              </Box>
              {promotions.map((promo, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: 'success.light' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="success.dark">
                        {promo.code}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {promo.discount}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Expires: {promo.expires}
                      </Typography>
                    </Box>
                    <Button variant="outlined" size="small">
                      Apply
                    </Button>
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Transaction History */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Transaction History
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Transaction ID</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Type</TableCell>
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
                            label={txn.type}
                            size="small"
                            color={getTransactionColor(txn.type) as any}
                          />
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

      {/* Add Payment Method Dialog */}
      <Dialog open={openAddPayment} onClose={() => setOpenAddPayment(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Payment Type</FormLabel>
              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
                <FormControlLabel value="bank" control={<Radio />} label="Bank Account (EFT)" />
                <FormControlLabel value="insurance" control={<Radio />} label="Insurance Direct Billing" />
              </RadioGroup>
            </FormControl>

            {paymentMethod === 'card' && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Card Number" placeholder="1234 5678 9012 3456" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Cardholder Name" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Expiry Date" placeholder="MM/YY" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVV" placeholder="123" />
                </Grid>
              </Grid>
            )}

            {paymentMethod === 'bank' && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Bank Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Account Number" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Routing Number" />
                </Grid>
              </Grid>
            )}

            {paymentMethod === 'insurance' && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Insurance Provider" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Policy Number" />
                </Grid>
              </Grid>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddPayment(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenAddPayment(false)}>
            Add Payment Method
          </Button>
        </DialogActions>
      </Dialog>

      {/* Top Up Dialog */}
      <Dialog open={openTopUp} onClose={() => setOpenTopUp(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Top Up PAYG Wallet</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              placeholder="Enter amount"
              InputProps={{
                startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
              }}
            />
            <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[50, 100, 200, 500].map((amount) => (
                <Chip key={amount} label={`$${amount}`} onClick={() => {}} clickable />
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTopUp(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenTopUp(false)}>
            Top Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Payments;
