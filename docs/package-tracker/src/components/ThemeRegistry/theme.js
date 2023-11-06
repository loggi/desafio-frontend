import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#3F51B5',
    },
    background: {
      default: '#f0f0f0',
    },
    mode: 'light',
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '0.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    fontFamily: roboto.style.fontFamily,
  },
  button: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid #ccc',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginHorizontal: 10,
        },
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.5rem',
        },
        h5: {
          fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
