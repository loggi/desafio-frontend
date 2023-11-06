import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

import LOCALES from '@/locales/navigation';

const { AUTH } = LOCALES;

const LoggedOutContent = ({ setIsLogged }) => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div style={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      <Button
        variant="button"
        color="text.primary"
        onClick={() => setIsLogged(true)}
      >
        {AUTH.LOGIN}
      </Button>
      <Button variant="outlined" onClick={() => setIsLogged(false)}>
        {AUTH.SIGNUP}
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
};

export default LoggedOutContent;
