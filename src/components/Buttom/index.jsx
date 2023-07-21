import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';


function ButtonConfirm({ text }) {
  const isScreenLessThan900px = () => window.innerWidth < 900;

  const [isHidden, setIsHidden] = useState(isScreenLessThan900px());

  const handleScreenResize = () => setIsHidden(isScreenLessThan900px());

useEffect(() => {
      window.addEventListener('resize', handleScreenResize);
       return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  if (isHidden) return null;

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "var(--black)",
        color: "var(--white)",
        border: "2px solid var(--light-blue)",
        "&:hover": {
          backgroundColor: "var(--light-blue)",
          color: "var(--white)",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonConfirm;
