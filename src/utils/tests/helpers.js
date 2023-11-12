import { render as renderComponent } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/styles/theme'

export const render = (children) => {
  return renderComponent(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
