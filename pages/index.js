import * as React from 'react';
import FormBox from '../src/components/FormBox';
import { Container, Grid, Box } from '@mui/material';
import ImageHome from '../src/components/Images/ImageHome';
import { useMediaQuery } from '@mui/material';

export default function Index() {
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth="lg" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
      }}>
        <Grid container spacing={2}>
          {!isScreenSmall && (
            <Grid item xs={12} sm={6}>
              <ImageHome />
            </Grid>
          )}

          <Grid item xs={12} sm={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <FormBox />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}