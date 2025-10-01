import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  InputAdornment,
  Avatar,
  ListItemAvatar,
} from '@mui/material';
import {
  Help,
  Email,
  Phone,
  ChatBubble,
  ExpandMore,
  Search,
  Send,
  Person,
  SmartToy,
  Description,
} from '@mui/icons-material';

function InsuranceSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! How can we help you with insurance claims today?', timestamp: '10:30 AM' },
  ]);

  const faqs = [
    {
      question: 'How do I process a claim?',
      answer: 'Navigate to the Claims page, select the claim you want to process, review the details, and click either Approve or Reject with appropriate notes.',
    },
    {
      question: 'What is the average claim processing time?',
      answer: 'The average claim processing time is 2-3 business days. Priority claims are processed within 24 hours.',
    },
    {
      question: 'How do I access claim analytics?',
      answer: 'Go to the Analytics page to view comprehensive claims data, approval rates, trends, and predictive insights.',
    },
    {
      question: 'Can I export claim reports?',
      answer: 'Yes, you can export claims data in CSV or PDF format from the Analytics page using the Export button.',
    },
    {
      question: 'How do I update policy information?',
      answer: 'Contact your system administrator or use the User Management section to update policy details.',
    },
    {
      question: 'What documents are required for claim approval?',
      answer: 'Required documents include service invoice, photos of work completed, customer signature, and any relevant receipts.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: chatMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setChatMessage('');

      // Simulate support response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'support',
          text: 'Thank you for your message. Our insurance support team will assist you shortly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, response]);
      }, 1000);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Insurance Support Center
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Get help with claims processing and insurance operations
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
                    insurance@upkiip.com
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

        {/* Resources */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Description color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Helpful Resources
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <Typography variant="body1" fontWeight="bold">
                      Claims Processing Guide
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Step-by-step instructions
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <Typography variant="body1" fontWeight="bold">
                      Policy Guidelines
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Coverage details
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <Typography variant="body1" fontWeight="bold">
                      Analytics Tutorial
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Using the dashboard
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <Typography variant="body1" fontWeight="bold">
                      API Documentation
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Integration guide
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
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
                  <TextField fullWidth label="Message" multiline rows={4} />
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

export default InsuranceSupport;
