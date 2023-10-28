import React from 'react';
import Card from '@mui/material/Card';

const StyledCard = ({ children, ...props }) => (
  <Card sx={{ padding: '28px 42px 42px', maxWidth: 400 }} {...props}>
    {children}
  </Card>
)

export default StyledCard;