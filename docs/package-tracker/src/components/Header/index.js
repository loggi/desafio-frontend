import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountMenu from '@/components/AccountMenu';
import LogoIcon from '@/components/LogoIcon';

const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={styles.toolbar}>
        <LogoIcon />
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: {
    my: 2,
    justifyContent: 'space-between',
  },
};

export default Header;
