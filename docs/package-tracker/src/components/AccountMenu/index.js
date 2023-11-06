'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import LoggedInContent from '@/components/LoggedInContent';
import LoggedOutContent from '@/components/LoggedOutContent';

import { useMediaQuery } from '@mui/material';

const AccountMenu = () => {
  const [isLogged, setIsLogged] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div style={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      <Navigation data-testid="navigation" />
      {isLogged ? (
        <LoggedInContent
          data-testid="logged-in-content"
          setIsLogged={setIsLogged}
        />
      ) : (
        <LoggedOutContent
          data-testid="logged-out-content"
          setIsLogged={setIsLogged}
        />
      )}
    </div>
  );
};

const styles = {
  mobileContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  desktopContainer: {
    display: 'flex',
  },
};

export default AccountMenu;
