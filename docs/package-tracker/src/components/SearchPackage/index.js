import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SearchPackage() {
  return (
    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
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
                <Button fullWidth variant="outlined">
                  Sign up for free
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
