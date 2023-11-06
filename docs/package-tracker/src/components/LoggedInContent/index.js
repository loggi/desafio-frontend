import React from 'react';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import LOCALES from '@/locales/navigation';

const { AUTH } = LOCALES;

const LoggedInContent = ({ setIsLogged }) => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div style={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      <Typography component="p" sx={styles.loginContent}>
        {AUTH.WELCOME}
      </Typography>
      <Button variant="outlined" onClick={() => setIsLogged(false)}>
        {AUTH.LOGOUT}
      </Button>
    </div>
  );
};

const styles = {
  desktopContainer: {
    display: 'flex',
    flex: 2,
    width: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileContainer: {
    display: 'flex',
    flex: 2,
    width: 240,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  loginContent: {
    px: 2,
  },
};

export default LoggedInContent;
