import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchPackage from '@/components/SearchPackage';
import LOCALES from '@/locales/hightLightBanner';

const HighlightBanner = () => {
  return (
    <Grid container justifyContent="space-evenly" sx={styles.container}>
      <Grid item xs={12} sm={4} sx={styles.textContainer}>
        <Typography variant="h3" align="center" color="white">
          {LOCALES.TITLE}
        </Typography>
        <Typography variant="h5" align="center" color="white">
          {LOCALES.SUBTITLE}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <SearchPackage />
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    pt: 10,
    pb: 6,
  },
  textContainer: {
    pt: 8,
    pb: 6,
  },
};

export default HighlightBanner;
