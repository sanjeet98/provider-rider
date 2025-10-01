import { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        p: 2,
        backgroundColor: 'background.paper',
        borderTop: '2px solid',
        borderColor: 'primary.main',
      }}
    >
      <Box sx={{ maxWidth: 'xl', mx: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. 
          By clicking "Accept", you consent to our use of cookies in accordance with GDPR and POPIA regulations.{' '}
          <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>
            Learn more
          </a>
        </Typography>
        <Button variant="contained" onClick={handleAccept} size="small">
          Accept
        </Button>
        <Button variant="outlined" onClick={handleDecline} size="small">
          Decline
        </Button>
        <IconButton size="small" onClick={handleDecline}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default ConsentBanner;
