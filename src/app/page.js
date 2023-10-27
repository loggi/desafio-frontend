import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TrackingForm from '../components/TrackingForm/TrackingForm';

export default function HomePage() {

  return (
    <Box sx={{ 
      display: 'flex', 
      background: "url(https://s3-sa-east-1.amazonaws.com/loggi-production-static/tracker-web-ui/images/package-ff9eb72c01531c46f6a2c2a5fbcb975c.png) no-repeat 100% 100%,linear-gradient(180deg,#006aff,#00baff)",
      backgroundSize: '550px,100vw',
      height: '100%',
    }}>
      <Grid xs={6} sx={{
        p: {
          md: 14,
          sm: 8,
          xs: 6
        }
      }}>
        <TrackingForm />
      </Grid>
    </Box>
  );
}
