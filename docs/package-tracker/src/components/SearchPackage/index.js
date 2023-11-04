'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchPackage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Value:', inputValue);
  };

  return (
    <>
      <Container component="main">
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Olá! Acompanhe com a Loggi a entrega do seu pedido. 😃
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Primeiro, digite o código de rastreamento.
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Código de rastreamento"
                    variant="outlined"
                    fullWidth
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Acompanhar pedido
                  </Button>
                </form>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
