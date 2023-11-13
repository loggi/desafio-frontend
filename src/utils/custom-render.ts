import { RenderOptions, render } from '@testing-library/react'
import { MuiProvider } from '@/components/MuiProvider'
import userEvent from '@testing-library/user-event'

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: MuiProvider, ...options })

const setup = (jsx: React.ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx)
})

export * from '@testing-library/react'

export { customRender as render, setup }
