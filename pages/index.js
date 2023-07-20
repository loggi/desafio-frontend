import * as React from 'react';
import FormBox from '../src/components/FormBox';
import Header from '../src/components/Header';
import { Container, Grid, Box } from '@mui/material';
import ImageHome from '../src/components/Images/ImageHome';

export default function Index() {
  return (<>
    <Header />
    <Container maxWidth="lg">
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FormBox />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ImageHome />
        </Grid>
      </Grid>
    </Container>
  </>

  );
}
