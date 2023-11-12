import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006AFF',
      light: '#0095FF',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#F50057'
    },
    text: {
      primary: '#000000'
    },
    background: {
      paper: '#FFFFFF'
    },
    error: {
      main: '#FF6562'
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    button: {
      fontSize: 16
    }
  },
  shape: {
    borderRadius: '100px'
  }
})

export default theme
