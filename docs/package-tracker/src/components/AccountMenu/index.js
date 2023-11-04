import Button from '@mui/material/Button';
import Navigation from '@/components/Navigation';

const AccountMenu = () => {
  const styles = useStyles();

  return (
    <>
      <Navigation />
      <Button href="#" variant="outlined" sx={styles.button}>
        Criar conta
      </Button>
    </>
  );
};

const useStyles = () => ({
  container: {
    backgroundColor: 'blue',
    color: '#000',
    boxShadow: 0,
    position: 'fixed',
  },
  button: { color: '#000', fontFamily: 'Arial' },
});

export default AccountMenu;
