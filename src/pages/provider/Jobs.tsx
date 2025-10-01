import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
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
  Avatar,
  Divider,
} from '@mui/material';
import {
  CheckCircle,
  Cancel,
  LocationOn,
  Person,
  Phone,
  Email,
} from '@mui/icons-material';

interface Job {
  id: string;
  type: string;
  customer: string;
  location: string;
  date: string;
  time: string;
  amount: number;
  status: 'new' | 'accepted' | 'in-progress' | 'completed' | 'declined';
  description: string;
  customerPhone?: string;
  customerEmail?: string;
}

function Jobs() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const jobs: Job[] = [
    {
      id: 'JOB-001',
      type: 'Plumbing Emergency',
      customer: 'John Smith',
      location: '123 Main St, New York, NY 10001',
      date: '2025-10-01',
      time: '2:00 PM',
      amount: 350,
      status: 'new',
      description: 'Burst pipe in kitchen, immediate attention required',
      customerPhone: '+1 (555) 123-4567',
      customerEmail: 'john.smith@example.com',
    },
    {
      id: 'JOB-002',
      type: 'Electrical Repair',
      customer: 'Sarah Johnson',
      location: '456 Oak Ave, New York, NY 10002',
      date: '2025-10-01',
      time: '4:30 PM',
      amount: 280,
      status: 'accepted',
      description: 'Circuit breaker replacement needed',
      customerPhone: '+1 (555) 234-5678',
      customerEmail: 'sarah.j@example.com',
    },
    {
      id: 'JOB-003',
      type: 'HVAC Maintenance',
      customer: 'Mike Davis',
      location: '789 Pine Rd, New York, NY 10003',
      date: '2025-10-02',
      time: '10:00 AM',
      amount: 420,
      status: 'accepted',
      description: 'Annual AC servicing and filter replacement',
      customerPhone: '+1 (555) 345-6789',
      customerEmail: 'mike.davis@example.com',
    },
    {
      id: 'JOB-004',
      type: 'Plumbing',
      customer: 'Emily Brown',
      location: '321 Elm St, New York, NY 10004',
      date: '2025-09-30',
      time: '11:00 AM',
      amount: 450,
      status: 'in-progress',
      description: 'Water heater installation',
      customerPhone: '+1 (555) 456-7890',
      customerEmail: 'emily.b@example.com',
    },
    {
      id: 'JOB-005',
      type: 'Electrical',
      customer: 'David Wilson',
      location: '654 Maple Dr, New York, NY 10005',
      date: '2025-09-28',
      time: '3:00 PM',
      amount: 320,
      status: 'completed',
      description: 'Light fixture installation',
      customerPhone: '+1 (555) 567-8901',
      customerEmail: 'david.w@example.com',
    },
  ];

  const filterJobs = (status: string) => {
    if (status === 'all') return jobs;
    if (status === 'new') return jobs.filter((job) => job.status === 'new');
    if (status === 'accepted') return jobs.filter((job) => job.status === 'accepted');
    if (status === 'in-progress') return jobs.filter((job) => job.status === 'in-progress');
    if (status === 'completed') return jobs.filter((job) => job.status === 'completed');
    return jobs;
  };

  const getStatusColor = (status: string): "default" | "warning" | "info" | "success" | "error" => {
    switch (status) {
      case 'new':
        return 'warning';
      case 'accepted':
        return 'info';
      case 'in-progress':
        return 'info';
      case 'completed':
        return 'success';
      case 'declined':
        return 'error';
      default:
        return 'default';
    }
  };

  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleAcceptJob = () => {
    if (selectedJob) {
      // Accept job logic
      setOpenDialog(false);
    }
  };

  const handleDeclineJob = () => {
    if (selectedJob) {
      // Decline job logic
      setOpenDialog(false);
    }
  };

  const handleCompleteJob = () => {
    if (selectedJob) {
      // Complete job logic
      setOpenDialog(false);
    }
  };

  const tabs = ['all', 'new', 'accepted', 'in-progress', 'completed'];
  const filteredJobs = filterJobs(tabs[tabValue]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Job Management
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        View and manage your service requests
      </Typography>

      <Card>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="All Jobs" />
          <Tab label={`New (${filterJobs('new').length})`} />
          <Tab label={`Accepted (${filterJobs('accepted').length})`} />
          <Tab label={`In Progress (${filterJobs('in-progress').length})`} />
          <Tab label={`Completed (${filterJobs('completed').length})`} />
        </Tabs>

        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Job ID</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Date & Time</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">
                        {job.id}
                      </Typography>
                    </TableCell>
                    <TableCell>{job.type}</TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" noWrap sx={{ maxWidth: 150 }}>
                          {job.location}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{job.date}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {job.time}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" fontWeight="bold" color="success.main">
                        ${job.amount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={job.status}
                        size="small"
                        color={getStatusColor(job.status)}
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button size="small" onClick={() => handleViewJob(job)}>
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

      {/* Job Details Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Job Details</DialogTitle>
        <DialogContent>
          {selectedJob && (
            <Box sx={{ pt: 1 }}>
              <Paper sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Job ID
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {selectedJob.id}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Status
                    </Typography>
                    <Chip
                      label={selectedJob.status}
                      size="small"
                      color={getStatusColor(selectedJob.status)}
                      sx={{ textTransform: 'capitalize' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Date
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {selectedJob.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Time
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {selectedJob.time}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>

              <Typography variant="h6" gutterBottom>
                Service Details
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Service Type
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedJob.type}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                  <Typography variant="body1">{selectedJob.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Location
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocationOn color="primary" />
                    <Typography variant="body1">{selectedJob.location}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Payment Amount
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="success.main">
                    ${selectedJob.amount}
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Customer Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <Person />
                    </Avatar>
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {selectedJob.customer}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone color="action" />
                    <Typography variant="body2">{selectedJob.customerPhone}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email color="action" />
                    <Typography variant="body2">{selectedJob.customerEmail}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {selectedJob?.status === 'new' && (
            <>
              <Button onClick={handleDeclineJob} startIcon={<Cancel />} color="error">
                Decline
              </Button>
              <Button variant="contained" onClick={handleAcceptJob} startIcon={<CheckCircle />}>
                Accept Job
              </Button>
            </>
          )}
          {selectedJob?.status === 'in-progress' && (
            <Button variant="contained" onClick={handleCompleteJob} startIcon={<CheckCircle />}>
              Mark as Completed
            </Button>
          )}
          {(selectedJob?.status === 'accepted' || selectedJob?.status === 'completed') && (
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Jobs;
