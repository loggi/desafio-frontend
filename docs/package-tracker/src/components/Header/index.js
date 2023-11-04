import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountMenu from '@/components/AccountMenu';

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: `1px solid #000` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Loggi
        </Typography>
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
