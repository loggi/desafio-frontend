import '@testing-library/jest-dom'

import { AppRouterContextProviderMock } from '@/mocks/app-context-provider'
import { screen, setup } from '@/utils/custom-render'
import Page from './page'

it('Renders the home page properly', () => {
  setup(
    <AppRouterContextProviderMock>
      <Page />
    </AppRouterContextProviderMock>
  )
  expect(screen.getByText('Acompanhe com a Loggi a entrega do seu pedido')).toBeInTheDocument()
})
