import Grid from '@mui/material/Grid';
import AppStoreIcon from '@/components/AppStoreIcon';
import PlayStoreIcon from '@/components/PlayStoreIcon';

const InstallAppBanner = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={styles.container}
    >
      <Grid item xs={12} sm={3}>
        <PlayStoreIcon />
      </Grid>
      <Grid item xs={12} sm={3}>
        <AppStoreIcon />
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
