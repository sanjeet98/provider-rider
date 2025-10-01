import { Box, Typography, Container, Paper, Divider } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold" align="center">
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Last Updated: October 1, 2025
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to UPKIIP ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service management platform.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            2. Information We Collect
          </Typography>
          <Typography variant="h6" gutterBottom>
            2.1 Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            We collect personal information that you voluntarily provide to us when you register on the platform, including:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Name and contact information (email, phone number, address)<br />
            • Account credentials (username, password)<br />
            • Payment information (credit card details, billing address)<br />
            • Service history and preferences<br />
            • Communication records with service providers
          </Typography>

          <Typography variant="h6" gutterBottom>
            2.2 Automatically Collected Information
          </Typography>
          <Typography variant="body1" paragraph>
            When you access our platform, we automatically collect certain information, including:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Device information (IP address, browser type, operating system)<br />
            • Usage data (pages visited, time spent, click patterns)<br />
            • Location data (with your permission)<br />
            • Cookies and similar tracking technologies
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            3. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect for the following purposes:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • To provide and maintain our services<br />
            • To process your transactions and manage your account<br />
            • To match you with appropriate service providers<br />
            • To send you notifications about your service requests<br />
            • To improve our platform and user experience<br />
            • To comply with legal obligations<br />
            • To detect and prevent fraud or security issues<br />
            • To send marketing communications (with your consent)
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            4. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" paragraph>
            We may share your information in the following circumstances:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Service Providers:</strong> With contractors and service providers who need access to perform services on our behalf<br />
            • <strong>Business Partners:</strong> With insurance companies and payment processors to facilitate transactions<br />
            • <strong>Legal Requirements:</strong> When required by law or to protect our rights<br />
            • <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets<br />
            • <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            5. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security measures to protect your personal information, including:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Encryption of data in transit and at rest<br />
            • Regular security assessments and audits<br />
            • Access controls and authentication mechanisms<br />
            • Employee training on data protection<br />
            • Incident response procedures
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            6. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the following rights regarding your personal information:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Access:</strong> Request access to your personal information<br />
            • <strong>Correction:</strong> Request correction of inaccurate information<br />
            • <strong>Deletion:</strong> Request deletion of your personal information<br />
            • <strong>Portability:</strong> Request a copy of your data in a portable format<br />
            • <strong>Opt-out:</strong> Opt-out of marketing communications<br />
            • <strong>Withdraw Consent:</strong> Withdraw consent for data processing
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            7. Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Note that disabling cookies may affect platform functionality.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            8. Data Retention
          </Typography>
          <Typography variant="body1" paragraph>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Service records are typically retained for 7 years for legal and accounting purposes.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            9. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            10. International Data Transfers
          </Typography>
          <Typography variant="body1" paragraph>
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            11. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            12. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>UPKIIP Privacy Team</strong><br />
            Email: privacy@upkiip.com<br />
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

export default PrivacyPolicy;
