import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchPackage from '@/components/SearchPackage';

const HighlightBanner = () => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        A melhor solução para envio de encomendas no Brasil.
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Alcance mais clientes com entregas locais e nacionais. Com a Loggi, você
        economiza tempo e dinheiro.
      </Typography>

      <SearchPackage />
    </Container>
  );
};

export default HighlightBanner;
