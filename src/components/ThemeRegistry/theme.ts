import { createTheme } from '@mui/material/styles';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#05f',
    }
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1536,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            backgroundImage:
              "linear-gradient( 136deg, rgb(33, 218, 242) 0%,#05f, rgb(15, 31, 173) 100%)",
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: () => ({
          border: 'none',
          borderRadius: '16px',
          boxShadow: 'none',
        }),
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: () => ({
          padding: '42px',
          paddingTop: '18px',
        }),
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#05f',
          }),
        }),
      },
    },
  },
});

export default theme;
