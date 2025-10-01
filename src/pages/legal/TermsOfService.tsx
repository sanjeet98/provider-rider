import { Box, Typography, Container, Paper, Divider } from '@mui/material';

function TermsOfService() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold" align="center">
          Terms of Service
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Last Updated: October 1, 2025
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using the UPKIIP platform ("Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            2. Description of Service
          </Typography>
          <Typography variant="body1" paragraph>
            UPKIIP provides a comprehensive service management platform that connects customers with service providers for various home and business maintenance needs. Our platform facilitates:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Service request submission and management<br />
            • Provider matching and dispatch<br />
            • Payment processing and invoicing<br />
            • Insurance claim management<br />
            • Real-time tracking and notifications
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            3. User Accounts
          </Typography>
          <Typography variant="h6" gutterBottom>
            3.1 Registration
          </Typography>
          <Typography variant="body1" paragraph>
            To use certain features of our Service, you must register for an account. You agree to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Provide accurate and complete information<br />
            • Maintain the security of your account credentials<br />
            • Notify us immediately of any unauthorized access<br />
            • Be responsible for all activities under your account
          </Typography>

          <Typography variant="h6" gutterBottom>
            3.2 Account Types
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Customer Accounts:</strong> For requesting and managing services<br />
            • <strong>Provider Accounts:</strong> For service professionals offering services<br />
            • <strong>Admin Accounts:</strong> For platform management and oversight<br />
            • <strong>Insurance Accounts:</strong> For insurance companies processing claims
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            4. User Conduct
          </Typography>
          <Typography variant="body1" paragraph>
            You agree not to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Violate any applicable laws or regulations<br />
            • Infringe on intellectual property rights<br />
            • Upload malicious code or viruses<br />
            • Harass, abuse, or harm other users<br />
            • Impersonate any person or entity<br />
            • Interfere with the proper functioning of the Service<br />
            • Attempt unauthorized access to our systems<br />
            • Use the Service for fraudulent purposes
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            5. Service Providers
          </Typography>
          <Typography variant="body1" paragraph>
            Service providers using our platform agree to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Maintain appropriate licenses and insurance<br />
            • Provide services professionally and competently<br />
            • Comply with all applicable laws and regulations<br />
            • Honor quoted prices and service commitments<br />
            • Maintain customer confidentiality<br />
            • Respond to service requests in a timely manner
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            6. Payments and Fees
          </Typography>
          <Typography variant="h6" gutterBottom>
            6.1 Service Fees
          </Typography>
          <Typography variant="body1" paragraph>
            Customers agree to pay for services as quoted by service providers. UPKIIP may charge platform fees or commissions as disclosed during the transaction process.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6.2 Payment Methods
          </Typography>
          <Typography variant="body1" paragraph>
            We accept various payment methods including credit cards, debit cards, and digital wallets. All payments are processed securely through our payment partners.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6.3 Refunds and Cancellations
          </Typography>
          <Typography variant="body1" paragraph>
            Refund and cancellation policies vary by service type and provider. Please review the specific terms before booking a service.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            7. Insurance Claims
          </Typography>
          <Typography variant="body1" paragraph>
            For services covered by insurance:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Claims must be submitted with accurate information<br />
            • Supporting documentation may be required<br />
            • Insurance companies make final approval decisions<br />
            • UPKIIP facilitates but does not guarantee claim approval<br />
            • Processing times vary by insurance provider
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            8. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All content, features, and functionality of the UPKIIP platform are owned by us and protected by copyright, trademark, and other intellectual property laws. You may not:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Copy, modify, or distribute our content without permission<br />
            • Use our trademarks or branding without authorization<br />
            • Reverse engineer or decompile our software<br />
            • Create derivative works based on our platform
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            9. Disclaimers and Limitations of Liability
          </Typography>
          <Typography variant="h6" gutterBottom>
            9.1 Service Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE SERVICE.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9.2 Provider Relationship
          </Typography>
          <Typography variant="body1" paragraph>
            UPKIIP is a platform connecting customers with independent service providers. We are not responsible for the quality, safety, or legality of services provided by third-party providers.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9.3 Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, UPKIIP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            10. Indemnification
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to indemnify and hold harmless UPKIIP and its affiliates from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            11. Dispute Resolution
          </Typography>
          <Typography variant="body1" paragraph>
            Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            12. Termination
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may terminate your account at any time by contacting us.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            13. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our platform. Your continued use of the Service after changes constitutes acceptance of the new Terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            14. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which UPKIIP operates, without regard to conflict of law principles.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            15. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For questions about these Terms, please contact us:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>UPKIIP Legal Team</strong><br />
            Email: legal@upkiip.com<br />
            Phone: +1 (800) 555-UPKIIP<br />
            Address: 123 Service Street, Tech City, TC 12345
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © 2025 UPKIIP. All rights reserved.
        </Typography>
      </Paper>
    </Container>
  );
}

export default TermsOfService;
