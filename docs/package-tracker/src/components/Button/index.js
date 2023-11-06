import React from 'react';
import Button from '@mui/material/Button';

function StyledButton({ action, children }) {
  return (
    <Button sx={styles.button} onClick={action}>
      {children}
    </Button>
  );
}

const styles = {
  button: {
    backgroundColor: 'white',
    color: 'white',
    textTransform: 'none',
  },
};

export default StyledButton;
