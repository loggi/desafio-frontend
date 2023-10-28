import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrackingForm from './TrackingForm';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  }),
}));


describe('<TrackingForm />', () => {

  it('deve renderizar o formulário corretamente', () => {
    render(<TrackingForm />);
    
    expect(screen.getByText('Olá!')).toBeInTheDocument();
    expect(screen.getByText(/Acompanhe com a Loggi a entrega do seu pedido/g)).toBeInTheDocument();
    expect(screen.getByText('Primeiro, digite o código de rastreamento')).toBeInTheDocument();
    expect(screen.getByText('Acompanhar pedido')).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro ao clicar no botão "Acompanhar pedido" sem um código de rastreamento', () => {
    render(<TrackingForm />);
    
    const acompanharPedidoButton = screen.getByText('Acompanhar pedido');
    fireEvent.click(acompanharPedidoButton);
    expect(screen.getByText('Campo Obrigatório')).toBeInTheDocument();
  });

  it('deve redirecionar para a rota correta ao clicar no botão "Acompanhar pedido" com um código de rastreamento', () => {
    
    render(<TrackingForm />);
    
    const acompanharPedidoButton = screen.getByText('Acompanhar pedido');
    const codigoRastreamentoInput = screen.getByLabelText('Código de rastreamento *');

    fireEvent.change(codigoRastreamentoInput, { target: { value: '123456' } });
    fireEvent.click(acompanharPedidoButton);
    expect(mockPush).toHaveBeenCalledWith('/tracking/123456');
  });
});
