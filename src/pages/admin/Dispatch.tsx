import { useState, useCallback } from 'react';
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
  Alert,
} from '@mui/material';
import { Map, Assignment, Timer, Refresh, Warning, DirectionsCar } from '@mui/icons-material';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

function Dispatch() {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    // Fit bounds to show all markers
    const bounds = new google.maps.LatLngBounds();
    activeJobs.forEach(job => bounds.extend(job.position));
    map.fitBounds(bounds);
  }, []);

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
      position: { lat: 40.7580, lng: -73.9855 }, // Times Square, NYC
      address: '123 Main St, New York, NY',
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
      position: { lat: 40.6782, lng: -73.9442 }, // Brooklyn
      address: '456 Oak Ave, Brooklyn, NY',
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
      position: { lat: 40.7282, lng: -73.7949 }, // Queens
      address: '789 Pine Rd, Queens, NY',
    },
  ];

  const providers = [
    { id: 'P1', name: 'Mike Johnson', position: { lat: 40.7489, lng: -73.9680 } },
    { id: 'P2', name: 'David Brown', position: { lat: 40.6892, lng: -73.9519 } },
  ];

  const getMarkerColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      case 'medium': return 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
      case 'low': return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      default: return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    }
  };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

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
              {!apiKey ? (
                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    <strong>Google Maps API Key Required</strong>
                  </Typography>
                  <Typography variant="caption">
                    Add VITE_GOOGLE_MAPS_API_KEY to your .env file. See GOOGLE_MAPS_SETUP.md for instructions.
                  </Typography>
                </Alert>
              ) : null}
              <Box sx={{ height: 400, borderRadius: 2, overflow: 'hidden' }}>
                {apiKey ? (
                  <LoadScript googleMapsApiKey={apiKey}>
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={11}
                      onLoad={onLoad}
                    >
                      {/* Job Markers */}
                      {activeJobs.map((job) => (
                        <Marker
                          key={job.id}
                          position={job.position}
                          icon={getMarkerColor(job.priority)}
                          onClick={() => setSelectedJob(job)}
                        />
                      ))}

                      {/* Provider Markers */}
                      {providers.map((provider) => (
                        <Marker
                          key={provider.id}
                          position={provider.position}
                          icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                          title={provider.name}
                        />
                      ))}

                      {/* Info Window */}
                      {selectedJob && (
                        <InfoWindow
                          position={selectedJob.position}
                          onCloseClick={() => setSelectedJob(null)}
                        >
                          <Box sx={{ p: 1 }}>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {selectedJob.id}
                            </Typography>
                            <Typography variant="body2">{selectedJob.type}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              Customer: {selectedJob.customer}
                            </Typography>
                            <br />
                            <Typography variant="caption" color="text.secondary">
                              Provider: {selectedJob.provider}
                            </Typography>
                            <br />
                            <Typography variant="caption" color="text.secondary">
                              {selectedJob.address}
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                              <Chip label={selectedJob.status} size="small" color="primary" />
                              <Chip label={selectedJob.priority} size="small" sx={{ ml: 0.5 }} />
                            </Box>
                            <Button
                              size="small"
                              startIcon={<DirectionsCar />}
                              sx={{ mt: 1 }}
                              onClick={() => {
                                window.open(
                                  `https://www.google.com/maps/dir/?api=1&destination=${selectedJob.position.lat},${selectedJob.position.lng}`,
                                  '_blank'
                                );
                              }}
                            >
                              Get Directions
                            </Button>
                          </Box>
                        </InfoWindow>
                      )}
                    </GoogleMap>
                  </LoadScript>
                ) : (
                  <Box
                    sx={{
                      height: '100%',
                      bgcolor: 'grey.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Add Google Maps API Key to enable map
                    </Typography>
                  </Box>
                )}
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
