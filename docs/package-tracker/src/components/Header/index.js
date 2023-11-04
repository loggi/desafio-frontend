import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountMenu from '@/components/AccountMenu';
import LogoIcon from '@/components/LogoIcon';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
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
