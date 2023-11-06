import React from 'react';
import Grid from '@mui/material/Grid';
import AppStoreIcon from '@/components/AppStoreIcon';
import PlayStoreIcon from '@/components/PlayStoreIcon';
import Button from '@/components/Button';

const InstallAppBanner = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={styles.container}
    >
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.item}>
        <Button>
          <PlayStoreIcon />
        </Button>
      </Grid>
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.item}>
        <Button>
          <AppStoreIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    mt: 10,
  },
  item: {
    py: 4,
  },
};

export default InstallAppBanner;
