import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Chip,
  InputAdornment,
} from '@mui/material';
import {
  ExpandMore,
  Send,
  Search,
  ChatBubble,
  Phone,
  Email,
  Help,
  SmartToy,
  Person,
} from '@mui/icons-material';

interface Message {
  id: number;
  sender: 'user' | 'bot' | 'agent';
  text: string;
  timestamp: string;
}

function CustomerSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! How can I help you today?',
      timestamp: '10:00 AM',
    },
  ]);

  const faqs = [
    {
      question: 'How do I request emergency service?',
      answer:
        'You can request emergency service by clicking the "Log Emergency Request" button on your home page or navigating to Service Request and selecting "Emergency" as the service type. Our system will immediately match you with the nearest available service provider.',
    },
    {
      question: 'What is covered under my subscription?',
      answer:
        'Your Premium Home Care subscription covers routine maintenance for plumbing, electrical, HVAC, and general home repairs. Emergency services are also included with priority response times. Check your subscription details for specific coverage limits.',
    },
    {
      question: 'How do I submit an insurance claim?',
      answer:
        'Navigate to the Claims page from the main menu. Click "Submit New Claim" and fill in the required details including service type, amount, and description. You can also upload supporting documents. Claims are typically processed within 3-5 business days.',
    },
    {
      question: 'How does the PAYG (Pay As You Go) wallet work?',
      answer:
        'The PAYG wallet allows you to pre-load funds for services not covered by your subscription or for additional services. You can top up your wallet anytime from the Payments page. Funds never expire and can be used for any service.',
    },
    {
      question: 'Can I choose my service provider?',
      answer:
        'Our system automatically matches you with the best available provider based on skills, ratings, and proximity. However, you can request a specific provider if they are available. You can also rate providers after service completion.',
    },
    {
      question: 'How do I track my service request?',
      answer:
        'Once you submit a service request, you can track it in real-time from your home page or the Service Request page. You will see the provider\'s ETA, current location, and status updates throughout the service.',
    },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        text: chatMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setChatMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          sender: 'bot',
          text: 'Thank you for your message. A support agent will assist you shortly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Support Center
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Get help, find answers, and contact our support team
      </Typography>

      <Grid container spacing={3}>
        {/* Contact Options */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', cursor: 'pointer', '&:hover': { boxShadow: 4 } }}>
                <CardContent>
                  <ChatBubble sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Live Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chat with our support team
                  </Typography>
                  <Chip label="Available Now" color="success" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', cursor: 'pointer', '&:hover': { boxShadow: 4 } }}>
                <CardContent>
                  <Phone sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Phone Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +1 (800) 555-UPKIIP
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                    Mon-Fri: 8AM - 8PM EST
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', cursor: 'pointer', '&:hover': { boxShadow: 4 } }}>
                <CardContent>
                  <Email sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Email Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    support@upkiip.com
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                    Response within 24 hours
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Live Chat */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <ChatBubble color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Live Chat
                </Typography>
              </Box>
              <Paper
                sx={{
                  height: 400,
                  overflow: 'auto',
                  p: 2,
                  bgcolor: 'grey.50',
                  mb: 2,
                }}
              >
                <List>
                  {messages.map((message) => (
                    <ListItem
                      key={message.id}
                      sx={{
                        flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                        alignItems: 'flex-start',
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main',
                          }}
                        >
                          {message.sender === 'user' ? <Person /> : <SmartToy />}
                        </Avatar>
                      </ListItemAvatar>
                      <Paper
                        sx={{
                          p: 1.5,
                          maxWidth: '70%',
                          bgcolor: message.sender === 'user' ? 'primary.light' : 'white',
                        }}
                      >
                        <Typography variant="body2">{message.text}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                          {message.timestamp}
                        </Typography>
                      </Paper>
                    </ListItem>
                  ))}
                </List>
              </Paper>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  size="small"
                />
                <Button variant="contained" onClick={handleSendMessage} endIcon={<Send />}>
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* FAQ Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Help color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Frequently Asked Questions
                </Typography>
              </Box>
              <TextField
                fullWidth
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="small"
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {filteredFaqs.map((faq, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="body1" fontWeight="bold">
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
                {filteredFaqs.length === 0 && (
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 4 }}>
                    No FAQs found matching your search.
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Feedback Form */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Send Us Feedback
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" type="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Tell us about your experience or suggest improvements..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" size="large">
                    Submit Feedback
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomerSupport;
