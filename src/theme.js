import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#00baff',
      dark: '#006aff',
    },
    secondary: {
      dark: '#000000',
      main: '#002766',
      light: 'linear-gradient(90deg, rgba(0,186,255,1) 0%, rgba(0,106,255,1) 75%)',
    },
    warning: {
      light: '#008449',
      dark: '#ffdc52',
      main: '#cc0014',
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
