'use client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormInput from '@/components/FormInput';
import FORM from '@/locales/searchPackage';

function SearchPackage() {
  return (
    <Grid container alignItems="flex-end">
      <Grid item xs={12} md={12}>
        <Card sx={styles.card}>
          <CardContent>
            <Typography {...styles.title}>{FORM.TITLE}</Typography>
            <Typography {...styles.subtitle}>{FORM.SUBTITILE}</Typography>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <FormInput labelText={FORM.LABEL} buttonText={FORM.BUTTON} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const styles = {
  card: {
    padding: 6,
  },
  cardActions: {
    witdh: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    variant: 'h6',
    textAlign: 'center',
    color: 'text.primary',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: 'text.primary',
  },
};

export default SearchPackage;