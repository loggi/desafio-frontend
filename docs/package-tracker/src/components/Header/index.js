import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountMenu from '@/components/AccountMenu';
import LogoIcon from '@/components/LogoIcon';

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ my: 2, justifyContent: 'space-between' }}>
        <LogoIcon className={styles.logo} />
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = () => ({
  container: {
    backgroundColor: 'blue',
    color: '#000',
    boxShadow: 0,
    position: 'fixed',
  },
  title: { color: '#000', fontFamily: 'Arial' },
});

export default Header;
