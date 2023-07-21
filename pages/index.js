import * as React from 'react';
import FormBox from '../src/components/FormBox';
import { Grid } from '@mui/material';
import ImageHome from '../src/components/Images/ImageHome';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: "linear-gradient(180deg, #EDE6E6, #D6D0D0, #FFF9F9)"
});

export default function Index() {
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <StyledContainer>
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
    </StyledContainer>
  );
}
