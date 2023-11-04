import Grid from '@mui/material/Grid';
import AppStoreIcon from '@/components/AppStoreIcon';
import PlayStoreIcon from '@/components/PlayStoreIcon';

const InstallAppBanner = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.container}>
        <PlayStoreIcon />
      </Grid>
      <Grid item xs={12} sm={2} textAlign="center" sx={styles.container}>
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
  item: {
    my: 1,
    px: 2,
  },
};

export default InstallAppBanner;
