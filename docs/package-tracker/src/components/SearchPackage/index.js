'use client';
import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    variant: 'h6',
    textAlign: 'center',
    color: 'text.primary',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    color: 'text.primary',
  },
};

export default SearchPackage;
