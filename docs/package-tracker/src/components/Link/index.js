'use client';
import Link from '@mui/material/Link';

const StyledLink = ({ text, onClick, sx }) => {
  return (
    <Link
      variant="button"
      color="text.primary"
      onClick={() => onClick}
      sx={sx}
      underline="none"
      textTransform="math-auto"
    >
      {text}
    </Link>
  );
};

export default StyledLink;
