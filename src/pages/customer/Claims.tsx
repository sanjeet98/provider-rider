import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
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
  Grid,
  Paper,
  LinearProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Visibility,
  CheckCircle,
  HourglassEmpty,
  Cancel,
  Description,
} from '@mui/icons-material';

interface Claim {
  id: string;
  date: string;
  type: string;
  amount: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  description: string;
}

function Claims() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [openNewClaim, setOpenNewClaim] = useState(false);

  const claims: Claim[] = [
    {
      id: 'CLM-2025-001',
      date: '2025-09-28',
      type: 'Plumbing Emergency',
      amount: 450,
      status: 'Approved',
      description: 'Burst pipe repair in kitchen',
    },
    {
      id: 'CLM-2025-002',
      date: '2025-09-25',
      type: 'Electrical Repair',
      amount: 320,
      status: 'Pending',
      description: 'Circuit breaker replacement',
    },
    {
      id: 'CLM-2025-003',
      date: '2025-09-20',
      type: 'HVAC Maintenance',
      amount: 280,
      status: 'Approved',
      description: 'Annual AC servicing',
    },
    {
      id: 'CLM-2025-004',
      date: '2025-09-15',
      type: 'Roof Repair',
      amount: 850,
      status: 'Rejected',
      description: 'Leak repair - not covered under policy',
    },
  ];

  const insuranceCoverage = {
    totalCoverage: 5000,
    usedAmount: 1050,
    remainingAmount: 3950,
    percentage: 21,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle color="success" />;
      case 'Pending':
        return <HourglassEmpty color="warning" />;
      case 'Rejected':
        return <Cancel color="error" />;
      default:
        return undefined;
    }
  };

  const getStatusColor = (status: string): "success" | "warning" | "error" => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'error';
      default:
        return 'warning';
    }
  };

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Claims Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            View and manage your insurance claims
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenNewClaim(true)}
        >
          Submit New Claim
        </Button>
      </Box>

      {/* Insurance Coverage Summary */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Insurance Coverage
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                Total Coverage
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                ${insuranceCoverage.totalCoverage}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                Used Amount
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="warning.main">
                ${insuranceCoverage.usedAmount}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                Remaining Coverage
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="success.main">
                ${insuranceCoverage.remainingAmount}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={insuranceCoverage.percentage}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                <Typography variant="body2" fontWeight="bold">
                  {insuranceCoverage.percentage}%
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Claims Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Claims History
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Claim ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Type</TableCell>
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
                    <TableCell>{claim.date}</TableCell>
                    <TableCell>{claim.type}</TableCell>
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

      {/* View Claim Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Claim Details</DialogTitle>
        <DialogContent>
          {selectedClaim && (
            <Box sx={{ pt: 1 }}>
              <Paper sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                <Typography variant="h6" gutterBottom>
                  {selectedClaim.id}
                </Typography>
                <Chip
                  icon={getStatusIcon(selectedClaim.status)}
                  label={selectedClaim.status}
                  color={getStatusColor(selectedClaim.status)}
                  sx={{ mb: 2 }}
                />
              </Paper>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Date
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.date}
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
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Type
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedClaim.type}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                  <Typography variant="body1">
                    {selectedClaim.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* New Claim Dialog */}
      <Dialog open={openNewClaim} onClose={() => setOpenNewClaim(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Submit New Claim</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Claim Type" select SelectProps={{ native: true }}>
                  <option value="">Select type</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="hvac">HVAC</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Amount" type="number" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  placeholder="Describe the issue and service provided"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" startIcon={<Description />} fullWidth>
                  Upload Supporting Documents
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewClaim(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenNewClaim(false)}>
            Submit Claim
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Claims;
