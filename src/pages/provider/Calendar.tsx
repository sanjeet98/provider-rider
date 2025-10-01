import { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import { Event, Sync } from '@mui/icons-material';
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for react-big-calendar
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  customer: string;
  status: 'accepted' | 'pending' | 'completed';
  type: string;
  location: string;
  notes?: string;
}

function ProviderCalendar() {
  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [openNewEvent, setOpenNewEvent] = useState(false);

  // Sample events with proper Date objects
  const [events] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: 'Plumbing Emergency',
      start: new Date(2025, 9, 1, 14, 0), // Oct 1, 2025, 2:00 PM
      end: new Date(2025, 9, 1, 16, 0),
      customer: 'John Smith',
      status: 'accepted',
      type: 'Plumbing',
      location: '123 Main St',
      notes: 'Burst pipe in basement',
    },
    {
      id: 2,
      title: 'Electrical Repair',
      start: new Date(2025, 9, 1, 16, 30),
      end: new Date(2025, 9, 1, 18, 0),
      customer: 'Sarah Johnson',
      status: 'accepted',
      type: 'Electrical',
      location: '456 Oak Ave',
    },
    {
      id: 3,
      title: 'HVAC Maintenance',
      start: new Date(2025, 9, 2, 10, 0),
      end: new Date(2025, 9, 2, 12, 0),
      customer: 'Mike Davis',
      status: 'accepted',
      type: 'HVAC',
      location: '789 Pine Rd',
    },
    {
      id: 4,
      title: 'General Repair',
      start: new Date(2025, 9, 3, 13, 0),
      end: new Date(2025, 9, 3, 15, 0),
      customer: 'Emily Brown',
      status: 'pending',
      type: 'General',
      location: '321 Elm St',
    },
    {
      id: 5,
      title: 'Kitchen Renovation',
      start: new Date(2025, 9, 5, 9, 0),
      end: new Date(2025, 9, 5, 17, 0),
      customer: 'Robert Wilson',
      status: 'accepted',
      type: 'Renovation',
      location: '555 Maple Dr',
    },
  ]);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleSelectSlot = () => {
    setOpenNewEvent(true);
  };

  const eventStyleGetter = (event: CalendarEvent) => {
    let backgroundColor = '#3174ad';
    
    switch (event.status) {
      case 'accepted':
        backgroundColor = '#4caf50';
        break;
      case 'pending':
        backgroundColor = '#ff9800';
        break;
      case 'completed':
        backgroundColor = '#2196f3';
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

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
              <Box sx={{ height: 600 }}>
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: '100%' }}
                  onSelectEvent={handleSelectEvent}
                  onSelectSlot={handleSelectSlot}
                  selectable
                  view={view}
                  onView={setView}
                  date={date}
                  onNavigate={setDate}
                  eventPropGetter={eventStyleGetter}
                />
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
                {events.slice(0, 4).map((event) => (
                  <Paper key={event.id} sx={{ p: 2, mb: 2, cursor: 'pointer' }} onClick={() => handleSelectEvent(event)}>
                    <Typography variant="body2" color="text.secondary">
                      {format(event.start, 'MMM dd, yyyy')}
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.customer}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                      <Typography variant="body2" color="primary">
                        {format(event.start, 'h:mm a')}
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
              <Button variant="outlined" fullWidth startIcon={<Sync />}>
                Sync with Google Calendar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Event Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Box sx={{ pt: 1 }}>
              <TextField
                fullWidth
                label="Title"
                value={selectedEvent.title}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="Customer"
                value={selectedEvent.customer}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="Type"
                value={selectedEvent.type}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="Location"
                value={selectedEvent.location}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="Start Time"
                value={format(selectedEvent.start, 'MMM dd, yyyy h:mm a')}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="End Time"
                value={format(selectedEvent.end, 'MMM dd, yyyy h:mm a')}
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                label="Status"
                value={selectedEvent.status}
                margin="normal"
                select
                InputProps={{ readOnly: true }}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="accepted">Accepted</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </TextField>
              {selectedEvent.notes && (
                <TextField
                  fullWidth
                  label="Notes"
                  value={selectedEvent.notes}
                  margin="normal"
                  multiline
                  rows={3}
                  InputProps={{ readOnly: true }}
                />
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            Edit Event
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Event Dialog */}
      <Dialog open={openNewEvent} onClose={() => setOpenNewEvent(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="Event Title"
              margin="normal"
              placeholder="e.g., Plumbing Repair"
            />
            <TextField
              fullWidth
              label="Customer Name"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Service Type"
              margin="normal"
              select
            >
              <MenuItem value="plumbing">Plumbing</MenuItem>
              <MenuItem value="electrical">Electrical</MenuItem>
              <MenuItem value="hvac">HVAC</MenuItem>
              <MenuItem value="general">General Repair</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Location"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Notes"
              margin="normal"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewEvent(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenNewEvent(false)}>
            Add Event
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ProviderCalendar;
