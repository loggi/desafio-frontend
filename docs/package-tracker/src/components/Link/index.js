'use client';
import React from 'react';
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
      data-testid="link"
    >
      {text}
    </Link>
  );
};

export default StyledLink;
