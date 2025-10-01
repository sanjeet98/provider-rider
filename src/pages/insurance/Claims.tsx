import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { CheckCircle, Cancel, HourglassEmpty, Visibility } from '@mui/icons-material';

interface Claim {
  id: string;
  claimDate: string;
  customerName: string;
  policyNumber: string;
  serviceType: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  description: string;
}

function InsuranceClaims() {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const claims: Claim[] = [
    {
      id: 'CLM-2025-001',
      claimDate: '2025-09-28',
      customerName: 'John Smith',
      policyNumber: 'POL-12345',
      serviceType: 'Plumbing Emergency',
      amount: 450,
      status: 'pending',
      description: 'Burst pipe repair in kitchen',
    },
    {
      id: 'CLM-2025-002',
      claimDate: '2025-09-25',
      customerName: 'Sarah Johnson',
      policyNumber: 'POL-12346',
      serviceType: 'Electrical Repair',
      amount: 320,
      status: 'approved',
      description: 'Circuit breaker replacement',
    },
    {
      id: 'CLM-2025-003',
      claimDate: '2025-09-20',
      customerName: 'Mike Davis',
      policyNumber: 'POL-12347',
      serviceType: 'HVAC Maintenance',
      amount: 280,
      status: 'approved',
      description: 'Annual AC servicing',
    },
    {
      id: 'CLM-2025-004',
      claimDate: '2025-09-15',
      customerName: 'Emily Brown',
      policyNumber: 'POL-12348',
      serviceType: 'Roof Repair',
      amount: 850,
      status: 'rejected',
      description: 'Leak repair - not covered under policy',
    },
  ];

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    setOpenDialog(true);
  };

  const handleApproveClaim = () => {
    // Approve logic
    setOpenDialog(false);
  };

  const handleRejectClaim = () => {
    // Reject logic
    setOpenDialog(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle color="success" />;
      case 'pending':
        return <HourglassEmpty color="warning" />;
      case 'rejected':
        return <Cancel color="error" />;
      default:
        return undefined;
    }
  };

  const getStatusColor = (status: string): "success" | "warning" | "error" => {
    switch (status) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'error';
      default:
        return 'warning';
    }
  };

  const pendingClaims = claims.filter((c) => c.status === 'pending').length;
  const totalAmount = claims.reduce((sum, c) => sum + c.amount, 0);
  const approvedAmount = claims.filter((c) => c.status === 'approved').reduce((sum, c) => sum + c.amount, 0);

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Claims Processing
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Review and process insurance claims
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Pending Claims
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="warning.main">
                {pendingClaims}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Awaiting review
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Claim Amount
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                ${totalAmount}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This period
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Approved Amount
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                ${approvedAmount}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Paid out
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Claims List
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Claim ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Policy Number</TableCell>
                  <TableCell>Service Type</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow key={claim.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">
                        {claim.id}
                      </Typography>
                    </TableCell>
                    <TableCell>{claim.claimDate}</TableCell>
                    <TableCell>{claim.customerName}</TableCell>
                    <TableCell>{claim.policyNumber}</TableCell>
                    <TableCell>{claim.serviceType}</TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" fontWeight="bold">
                        ${claim.amount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        icon={getStatusIcon(claim.status)}
                        label={claim.status}
                        color={getStatusColor(claim.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        startIcon={<Visibility />}
                        onClick={() => handleViewClaim(claim)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Claim Details Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Claim Details</DialogTitle>
        <DialogContent>
          {selectedClaim && (
            <Box sx={{ pt: 1 }}>
              <Paper sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                <Typography variant="h6" gutterBottom>
                  {selectedClaim.id}
                </Typography>
                <Chip
                  icon={getStatusIcon(selectedClaim.status)}
                  label={selectedClaim.status}
                  color={getStatusColor(selectedClaim.status)}
                />
              </Paper>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Claim Date
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.claimDate}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Amount
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    ${selectedClaim.amount}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Customer Name
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.customerName}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Policy Number
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.policyNumber}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Service Type
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.serviceType}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                  <Typography variant="body1">{selectedClaim.description}</Typography>
                </Grid>
                {selectedClaim.status === 'pending' && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Decision Notes"
                      multiline
                      rows={3}
                      placeholder="Add notes for approval/rejection..."
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {selectedClaim?.status === 'pending' ? (
            <>
              <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button onClick={handleRejectClaim} color="error" startIcon={<Cancel />}>
                Reject
              </Button>
              <Button variant="contained" onClick={handleApproveClaim} startIcon={<CheckCircle />}>
                Approve
              </Button>
            </>
          ) : (
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default InsuranceClaims;
