import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  List,
  Chip,
  Button,
} from '@mui/material';
import { CalendarMonth, Event } from '@mui/icons-material';

function ProviderCalendar() {
  const events = [
    { date: '2025-10-01', time: '2:00 PM', title: 'Plumbing Emergency', customer: 'John Smith', status: 'accepted' },
    { date: '2025-10-01', time: '4:30 PM', title: 'Electrical Repair', customer: 'Sarah Johnson', status: 'accepted' },
    { date: '2025-10-02', time: '10:00 AM', title: 'HVAC Maintenance', customer: 'Mike Davis', status: 'accepted' },
    { date: '2025-10-03', time: '1:00 PM', title: 'General Repair', customer: 'Emily Brown', status: 'pending' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Schedule Calendar
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        View and manage your job schedule
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  height: 600,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <CalendarMonth sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Calendar View
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Integration with calendar library (e.g., FullCalendar, React Big Calendar)
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Event color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Upcoming Events
                </Typography>
              </Box>
              <List>
                {events.map((event, index) => (
                  <Paper key={index} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {event.date}
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.customer}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                      <Typography variant="body2" color="primary">
                        {event.time}
                      </Typography>
                      <Chip
                        label={event.status}
                        size="small"
                        color={event.status === 'accepted' ? 'success' : 'warning'}
                      />
                    </Box>
                  </Paper>
                ))}
              </List>
              <Button variant="outlined" fullWidth>
                Sync with Google Calendar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProviderCalendar;
