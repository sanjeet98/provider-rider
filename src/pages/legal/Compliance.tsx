import { Box, Typography, Container, Paper, Divider, Chip } from '@mui/material';
import { Security, Verified, Policy } from '@mui/icons-material';

function Compliance() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold" align="center">
          GDPR & POPIA Compliance
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
          Last Updated: October 1, 2025
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
          <Chip icon={<Security />} label="GDPR Compliant" color="success" />
          <Chip icon={<Verified />} label="POPIA Compliant" color="success" />
          <Chip icon={<Policy />} label="ISO 27001" color="primary" />
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            1. Our Commitment to Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            UPKIIP is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR) and the Protection of Personal Information Act (POPIA). We implement robust data protection measures to ensure your information is handled securely and lawfully.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            2. GDPR Compliance
          </Typography>
          <Typography variant="h6" gutterBottom>
            2.1 Lawful Basis for Processing
          </Typography>
          <Typography variant="body1" paragraph>
            We process personal data based on the following lawful grounds:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Consent:</strong> You have given clear consent for us to process your data<br />
            • <strong>Contract:</strong> Processing is necessary to fulfill our contract with you<br />
            • <strong>Legal Obligation:</strong> Processing is required to comply with the law<br />
            • <strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests
          </Typography>

          <Typography variant="h6" gutterBottom>
            2.2 Your GDPR Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Under GDPR, you have the following rights:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Right to Access:</strong> Request copies of your personal data<br />
            • <strong>Right to Rectification:</strong> Request correction of inaccurate data<br />
            • <strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")<br />
            • <strong>Right to Restrict Processing:</strong> Request limitation of data processing<br />
            • <strong>Right to Data Portability:</strong> Receive your data in a portable format<br />
            • <strong>Right to Object:</strong> Object to processing of your data<br />
            • <strong>Rights Related to Automated Decision-Making:</strong> Not be subject to automated decisions
          </Typography>

          <Typography variant="h6" gutterBottom>
            2.3 Data Protection Officer
          </Typography>
          <Typography variant="body1" paragraph>
            We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            <strong>Data Protection Officer</strong><br />
            Email: dpo@upkiip.com<br />
            Phone: +1 (800) 555-UPKIIP ext. 101
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            3. POPIA Compliance
          </Typography>
          <Typography variant="h6" gutterBottom>
            3.1 POPIA Principles
          </Typography>
          <Typography variant="body1" paragraph>
            We adhere to the eight conditions for lawful processing under POPIA:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            1. <strong>Accountability:</strong> We take responsibility for data protection<br />
            2. <strong>Processing Limitation:</strong> We process data lawfully and reasonably<br />
            3. <strong>Purpose Specification:</strong> We collect data for specific purposes<br />
            4. <strong>Further Processing Limitation:</strong> We don't use data for unrelated purposes<br />
            5. <strong>Information Quality:</strong> We ensure data is complete and accurate<br />
            6. <strong>Openness:</strong> We are transparent about data processing<br />
            7. <strong>Security Safeguards:</strong> We protect data with appropriate measures<br />
            8. <strong>Data Subject Participation:</strong> We respect your rights to access and correct data
          </Typography>

          <Typography variant="h6" gutterBottom>
            3.2 Information Officer
          </Typography>
          <Typography variant="body1" paragraph>
            As required by POPIA, we have designated an Information Officer:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            <strong>Information Officer</strong><br />
            Email: info.officer@upkiip.com<br />
            Phone: +1 (800) 555-UPKIIP ext. 102
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            4. Data Processing Activities
          </Typography>
          <Typography variant="h6" gutterBottom>
            4.1 Categories of Data Processed
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Personal identifiers (name, email, phone)<br />
            • Financial information (payment details, billing address)<br />
            • Service history and preferences<br />
            • Location data (for service dispatch)<br />
            • Communication records<br />
            • Technical data (IP address, device information)
          </Typography>

          <Typography variant="h6" gutterBottom>
            4.2 Data Processors
          </Typography>
          <Typography variant="body1" paragraph>
            We work with the following categories of data processors:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Cloud hosting providers (AWS, Google Cloud)<br />
            • Payment processors (Stripe, PayPal)<br />
            • Email service providers (SendGrid)<br />
            • Analytics providers (Google Analytics)<br />
            • Customer support tools (Zendesk)
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            5. International Data Transfers
          </Typography>
          <Typography variant="body1" paragraph>
            When transferring data internationally, we ensure adequate protection through:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Standard Contractual Clauses (SCCs) approved by the EU Commission<br />
            • Adequacy decisions for countries with equivalent protection<br />
            • Binding Corporate Rules (BCRs) where applicable<br />
            • Explicit consent for transfers when required
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            6. Data Breach Notification
          </Typography>
          <Typography variant="body1" paragraph>
            In the event of a data breach, we will:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Notify the relevant supervisory authority within 72 hours (GDPR)<br />
            • Notify affected individuals without undue delay<br />
            • Document the breach and our response<br />
            • Take immediate steps to mitigate the breach<br />
            • Implement measures to prevent future breaches
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            7. Data Retention
          </Typography>
          <Typography variant="body1" paragraph>
            We retain personal data only for as long as necessary:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Active Accounts:</strong> Duration of account plus 1 year<br />
            • <strong>Service Records:</strong> 7 years (legal and accounting requirements)<br />
            • <strong>Payment Information:</strong> As required by financial regulations<br />
            • <strong>Marketing Data:</strong> Until consent is withdrawn<br />
            • <strong>Legal Claims:</strong> Duration of applicable statute of limitations
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            8. Security Measures
          </Typography>
          <Typography variant="body1" paragraph>
            We implement comprehensive security measures including:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • <strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit<br />
            • <strong>Access Controls:</strong> Role-based access with multi-factor authentication<br />
            • <strong>Network Security:</strong> Firewalls, intrusion detection systems<br />
            • <strong>Regular Audits:</strong> Quarterly security assessments and penetration testing<br />
            • <strong>Employee Training:</strong> Mandatory data protection training for all staff<br />
            • <strong>Incident Response:</strong> 24/7 security monitoring and response team
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            9. Privacy by Design and Default
          </Typography>
          <Typography variant="body1" paragraph>
            We implement privacy by design principles:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Data minimization - collect only necessary information<br />
            • Purpose limitation - use data only for stated purposes<br />
            • Storage limitation - delete data when no longer needed<br />
            • Integrity and confidentiality - protect data from unauthorized access<br />
            • Privacy-friendly default settings
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            10. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            We do not knowingly process data of children under 16 (GDPR) or 18 (POPIA) without parental consent. If we become aware of such processing, we will delete the data immediately.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            11. Exercising Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            To exercise your data protection rights:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            1. Submit a request via email to: rights@upkiip.com<br />
            2. Include your full name and account email<br />
            3. Specify which right you wish to exercise<br />
            4. Provide verification of your identity<br />
            5. We will respond within 30 days (GDPR) or reasonable time (POPIA)
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            12. Complaints and Supervisory Authorities
          </Typography>
          <Typography variant="body1" paragraph>
            If you believe we have not complied with data protection laws, you may:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Contact our Data Protection Officer or Information Officer<br />
            • Lodge a complaint with your local supervisory authority<br />
            • <strong>EU:</strong> Contact your national Data Protection Authority<br />
            • <strong>South Africa:</strong> Contact the Information Regulator (POPIA)<br />
            • Seek judicial remedy through the courts
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            13. Updates to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We review and update our compliance measures regularly. Material changes will be communicated through:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
            • Email notification to registered users<br />
            • Prominent notice on our platform<br />
            • Updated "Last Modified" date on this page
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            14. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For compliance-related inquiries:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <strong>UPKIIP Compliance Team</strong><br />
            Data Protection Officer: dpo@upkiip.com<br />
            Information Officer: info.officer@upkiip.com<br />
            General Compliance: compliance@upkiip.com<br />
            Phone: +1 (800) 555-UPKIIP<br />
            Address: 123 Service Street, Tech City, TC 12345
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Certifications & Compliance</strong>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="GDPR Compliant" size="small" />
            <Chip label="POPIA Compliant" size="small" />
            <Chip label="ISO 27001 Certified" size="small" />
            <Chip label="SOC 2 Type II" size="small" />
            <Chip label="PCI DSS Compliant" size="small" />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            © 2025 UPKIIP. All rights reserved.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Compliance;
