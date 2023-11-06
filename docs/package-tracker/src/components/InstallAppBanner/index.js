import React from 'react';
import Grid from '@mui/material/Grid';
import AppStoreIcon from '@/components/AppStoreIcon';
import PlayStoreIcon from '@/components/PlayStoreIcon';
import Button from '@/components/Button';

const InstallAppBanner = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.container}>
        <Button>
          <PlayStoreIcon />
        </Button>
      </Grid>
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.container}>
        <Button>
          <AppStoreIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    pt: 10,
    pb: 6,
  },
};

export default InstallAppBanner;
