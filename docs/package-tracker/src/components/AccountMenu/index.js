'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import LoggedInContent from '@/components/LoggedInContent';
import LoggedOutContent from '@/components/LoggedOutContent';

const AccountMenu = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div style={styles.container}>
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
  container: {
    display: 'flex',
  },
};

export default AccountMenu;
