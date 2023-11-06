import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LOCALES from '@/locales/navigation';

const { AUTH } = LOCALES;

const LoggedInContent = ({ setIsLogged }) => {
  return (
    <div style={styles.container}>
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
  container: {
    display: 'flex',
    flex: 2,
    width: 240,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginContent: {
    px: 2,
  },
};

export default LoggedInContent;
