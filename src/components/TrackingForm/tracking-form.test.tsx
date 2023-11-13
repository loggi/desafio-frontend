import '@testing-library/jest-dom'

import { AppRouterContextProviderMock } from '@/mocks/app-context-provider'
import { fireEvent, render, screen, waitFor, setup, act } from '@/utils/custom-render'
import { TrackingForm } from './tracking-form'

describe('Component rendering', () => {
  it('Renders the form properly', () => {
    setup(
      <AppRouterContextProviderMock>
        <TrackingForm />
      </AppRouterContextProviderMock>
    )
    expect(screen.getByTestId('trackingNumber')).toBeInTheDocument()
    expect(screen.getByTestId('submitTrackingButton')).toBeInTheDocument()
  })

  it('Shows a loading state while submitting the form', async () => {
    const mockSubmit = jest.fn()

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ error: 'Código de rastreamento não encontrado ou inválido' })
    })

    setup(
      <AppRouterContextProviderMock>
        <TrackingForm onSubmit={mockSubmit} />
      </AppRouterContextProviderMock>
    )

    act(() => {
      fireEvent.change(screen.getByTestId('trackingNumber'), { target: { value: '12345678910' } })
      fireEvent.click(screen.getByTestId('submitTrackingButton'))
    })

    expect(screen.getByText('Rastreando...')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()

    await waitFor(() => {
      expect(screen.queryByText('Rastreando...')).toBeNull()
      expect(screen.getByRole('button')).not.toBeDisabled()
      expect(screen.getByText('Código de rastreamento não encontrado ou inválido')).toBeTruthy()
    })

    expect(mockSubmit).toHaveBeenCalledTimes(0)
  })
})

describe('Form validation', () => {
  it('Receives an error when trackingNumber is blank', async () => {
    const { user } = setup(
      <AppRouterContextProviderMock>
        <TrackingForm />
      </AppRouterContextProviderMock>
    )

    await user.click(screen.getByTestId('submitTrackingButton'))

    expect(screen.getByText('O código de rastreamento é obrigatório')).toBeTruthy()
  })

  it('Receives an error when trackingNumber length is invalid', async () => {
    const mockSubmit = jest.fn()
    const { user } = setup(
      <AppRouterContextProviderMock>
        <TrackingForm onSubmit={mockSubmit} />
      </AppRouterContextProviderMock>
    )

    await user.type(screen.getByTestId('trackingNumber'), '123')
    await user.click(screen.getByTestId('submitTrackingButton'))

    expect(screen.getByText('O código de rastreamento é inválido')).toBeTruthy()
    expect(mockSubmit).toHaveBeenCalledTimes(0)
  })

  it('Receives an error when trackingNumber does not exist in the database', async () => {
    const mockSubmit = jest.fn()

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ error: 'Código de rastreamento não encontrado ou inválido' })
    })

    setup(
      <AppRouterContextProviderMock>
        <TrackingForm onSubmit={mockSubmit} />
      </AppRouterContextProviderMock>
    )

    act(() => {
      fireEvent.change(screen.getByTestId('trackingNumber'), { target: { value: '12345678910' } })
      fireEvent.click(screen.getByTestId('submitTrackingButton'))
    })

    await waitFor(() => {
      expect(screen.getByText('Código de rastreamento não encontrado ou inválido')).toBeTruthy()
    })

    expect(mockSubmit).toHaveBeenCalledTimes(0)
  })
})
