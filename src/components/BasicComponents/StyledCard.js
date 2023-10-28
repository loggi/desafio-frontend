import React from 'react';
import Card from '@mui/material/Card';

const StyledCard = ({ children }) => (
  <Card sx={{ padding: '28px 42px 42px', maxWidth: 400 }}>
    {children}
  </Card>
)

export default StyledCard;