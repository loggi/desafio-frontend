import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@/components/Link';

const COMPANY_NAME = 'Loggi';
const COMPANY_SITE = 'https://www.loggi.com/';

const Copyright = ({ props }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href={COMPANY_SITE}>
        {COMPANY_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
