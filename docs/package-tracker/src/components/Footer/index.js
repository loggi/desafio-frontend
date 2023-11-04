import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.loggi.com/">
        Loggi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Para você',
    description: ['Entragador via aplicativo'],
  },
  {
    title: 'Para empresas',
    description: [
      'Entregador para escritórios',
      'Soluções para varejo',
      'Entrega para e-commerces',
    ],
  },
  {
    title: 'Para entregar',
    description: ['Seja uma Transportadora Leve', 'Seja um entregador'],
  },
  {
    title: 'Loggi',
    description: ['Trabalhe conosco'],
  },
  {
    title: 'Dúvidas',
    description: ['loggi.com/ajuda', 'Imprensa'],
  },
];

export default function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={5} sm={2} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
