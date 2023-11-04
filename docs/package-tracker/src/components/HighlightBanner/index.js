import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchPackage from '@/components/SearchPackage';

const HighlightBanner = () => {
  return (
    <Grid container justifyContent="space-evenly" sx={{ pt: 8, pb: 6 }}>
      <Grid xs={12} sm={5}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          A melhor solução para envio de encomendas no Brasil.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          component="p"
        >
          Alcance mais clientes com entregas locais e nacionais. Com a Loggi,
          você economiza tempo e dinheiro.
        </Typography>
      </Grid>
      <Grid xs={12} sm={3}>
        <SearchPackage />
      </Grid>
    </Grid>
  );
};

export default HighlightBanner;
