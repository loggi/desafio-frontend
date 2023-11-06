import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LOCALES from '@/locales/navigation';

const { AUTH } = LOCALES;

const LoggedInContent = ({ setIsLogged }) => {
  return (
    <>
      <Typography component="p">{AUTH.WELCOME}</Typography>
      <Button variant="outlined" onClick={() => setIsLogged(false)}>
        {AUTH.LOGOUT}
      </Button>
    </>
  );
};

export default LoggedInContent;
