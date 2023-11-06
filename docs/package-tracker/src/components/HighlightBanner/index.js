import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchPackage from '@/components/SearchPackage';
import LOCALES from '@/locales/hightLightBanner';

const HighlightBanner = () => {
  return (
    <Grid container justifyContent="space-evenly" sx={styles.container}>
      <Grid item xs={12} sm={4} sx={styles.textContainer}>
        <Typography variant="h3" sx={styles.text}>
          {LOCALES.TITLE}
        </Typography>
        <Typography variant="h5" sx={styles.text}>
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
  text: {
    mb: 2,
    color: 'white',
    align: 'center',
  },
};

export default HighlightBanner;
