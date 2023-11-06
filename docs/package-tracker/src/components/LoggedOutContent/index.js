import React from 'react';
import Button from '@mui/material/Button';

import LOCALES from '@/locales/navigation';

const { AUTH } = LOCALES;

const LoggedOutContent = ({ setIsLogged }) => {
  return (
    <div>
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

export default LoggedOutContent;