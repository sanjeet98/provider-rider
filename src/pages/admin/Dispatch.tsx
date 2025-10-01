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
  Chip,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import { Map, Assignment, Timer, Refresh, Warning } from '@mui/icons-material';

function Dispatch() {
  const activeJobs = [
    {
      id: 'JOB-001',
      customer: 'John Smith',
      provider: 'Mike Johnson',
      type: 'Plumbing Emergency',
      status: 'in-progress',
      eta: '15 mins',
      slaStatus: 'on-track',
      priority: 'high',
    },
    {
      id: 'JOB-002',
      customer: 'Sarah Williams',
      provider: 'Unassigned',
      type: 'Electrical Repair',
      status: 'pending',
      eta: '-',
      slaStatus: 'at-risk',
      priority: 'medium',
    },
    {
      id: 'JOB-003',
      customer: 'Mike Davis',
      provider: 'David Brown',
      type: 'HVAC Maintenance',
      status: 'accepted',
      eta: '45 mins',
      slaStatus: 'on-track',
      priority: 'low',
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Dispatch & Monitoring
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Real-time job tracking and assignment
          </Typography>
        </Box>
        <IconButton color="primary">
          <Refresh />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Map color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Live Job Map
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 400,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Map Integration (Google Maps / Mapbox)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                SLA Monitoring
              </Typography>
              <Paper sx={{ p: 2, mb: 2, bgcolor: 'error.light' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Warning color="error" />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">
                      2 Jobs At Risk
                    </Typography>
                    <Typography variant="caption">Exceeding response time</Typography>
                  </Box>
                </Box>
              </Paper>
              <Paper sx={{ p: 2, mb: 2, bgcolor: 'success.light' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Timer color="success" />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">
                      15 Jobs On Track
                    </Typography>
                    <Typography variant="caption">Within SLA limits</Typography>
                  </Box>
                </Box>
              </Paper>
              <Button variant="contained" fullWidth>
                View All Incidents
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Assignment color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Active Service Requests
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Job ID</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Provider</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>ETA</TableCell>
                      <TableCell>SLA Status</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {activeJobs.map((job) => (
                      <TableRow key={job.id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {job.id}
                          </Typography>
                        </TableCell>
                        <TableCell>{job.customer}</TableCell>
                        <TableCell>
                          {job.provider === 'Unassigned' ? (
                            <Chip label="Unassigned" size="small" color="warning" />
                          ) : (
                            job.provider
                          )}
                        </TableCell>
                        <TableCell>{job.type}</TableCell>
                        <TableCell>
                          <Chip
                            label={job.status}
                            size="small"
                            color={
                              job.status === 'in-progress'
                                ? 'info'
                                : job.status === 'accepted'
                                ? 'success'
                                : 'warning'
                            }
                          />
                        </TableCell>
                        <TableCell>{job.eta}</TableCell>
                        <TableCell>
                          <Chip
                            label={job.slaStatus}
                            size="small"
                            color={job.slaStatus === 'on-track' ? 'success' : 'error'}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={job.priority}
                            size="small"
                            color={
                              job.priority === 'high'
                                ? 'error'
                                : job.priority === 'medium'
                                ? 'warning'
                                : 'default'
                            }
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Button size="small">Override</Button>
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

export default Dispatch;
