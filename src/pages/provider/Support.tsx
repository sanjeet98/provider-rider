import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import { ExpandMore, Phone, Help } from '@mui/icons-material';

function ProviderSupport() {
  const faqs = [
    {
      question: 'How do I accept a job request?',
      answer: 'Navigate to the Jobs page, view the job details, and click "Accept Job". You will be notified of the customer details and location.',
    },
    {
      question: 'When will I receive my payout?',
      answer: 'Payouts are processed weekly once you reach the minimum threshold of $500. You can request a payout from the Payments page.',
    },
    {
      question: 'How is my rating calculated?',
      answer: 'Your rating is based on customer feedback after job completion. Factors include quality of work, professionalism, and timeliness.',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Provider Support
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Get help and find answers to common questions
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Phone color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Contact Support
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Phone: +1 (800) 555-PROVIDER
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Email: provider-support@unkiip.com
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Help color="primary" />
                <Typography variant="h6" fontWeight="bold">
                  Frequently Asked Questions
                </Typography>
              </Box>
              {faqs.map((faq, index) => (
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProviderSupport;
