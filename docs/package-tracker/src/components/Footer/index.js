import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@/components/Link';
import Container from '@mui/material/Container';
import Copyright from '@/components/Copyright';
import LINKS from '@/locales/footer';

const Footer = () => {
  return (
    <Container component="footer" sx={styles.footerContainer}>
      <Grid container justifyContent="space-evenly">
        {LINKS.map((item) => (
          <Grid item key={item.title} sx={styles.gridItem}>
            <Typography {...styles.linkTypography}>{item.title}</Typography>
            <ul>
              {item.description.map((i) => (
                <li key={i}>
                  <Link text={i} sx={styles.linkList}></Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

const styles = {
  footerContainer: {
    mt: 8,
    py: [3, 6],
  },
  gridItem: {
    xs: 5,
    sm: 2,
  },
  linkTypography: {
    variant: 'h6',
    color: 'text.primary',
    gutterBottom: true,
    sx: {
      mx: 0,
      my: 2,
    },
  },
  linkList: {
    mx: 0,
    my: 2,
  },
};

export default Footer;
