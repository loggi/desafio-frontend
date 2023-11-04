import Button from '@mui/material/Button';

function StyledButton({ text, action }) {
  return (
    <Button sx={styles.button} onClick={action}>
      {text}
    </Button>
  );
}

const styles = {
  button: {
    backgroundColor: 'green',
    color: 'white',
  },
};

export default StyledButton;
