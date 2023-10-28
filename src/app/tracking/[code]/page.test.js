import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TrackingPage from './page';
import { formatDate } from '@/utils/date';
import '@testing-library/jest-dom';


const mock = {
    "eta": 1677251584,
    "packageInfo": {
        "packageId": 275314784,
        "trackingKey": "123456",
        "companyName": "LOGGI TECNOLOGIA LTDA.",
        "companyHash": "738eb47729"
    },
    "redispatchInfo": {
        "trackingCode": null,
        "maxPickupTime": null
    },
    "currentStatus": {
        "error": null,
        "inProgress": false,
        "destination": "RECIPIENT",
        "type": "d"
    },
    "shipperStatus": {
        "code": 5,
        "label": "Entregue",
        "description": "O pacote chegou ao destino final.",
        "actionRequired": {
            "reasonLabel": "Entregue",
            "reasonDescription": "O pacote chegou ao destino final."
        }
    },
    "destinationInfo": {
        "firstLine": "Rua Est\u00e1*** ** *\u00e1, ****"
    },
    "canAuthenticate": true
};

describe('<TrackingPage />', () => {
  it('deve renderizar as informações de rastreamento corretamente', () => {
    render(<TrackingPage params={{ code: '123456' }} />);
    
    expect(screen.getByText('123456')).toBeInTheDocument(); 
    expect(screen.getByText(formatDate(1677251584))).toBeInTheDocument(); 
    expect(screen.getByText('Entregue')).toBeInTheDocument(); 
    expect(screen.getByText('Rua Est\u00e1*** ** *\u00e1, ****')).toBeInTheDocument(); 
  });

  it('deve chamar enableDestinationInfo ao clicar no botão "Liberar"', async () => {

    render(<TrackingPage params={{ code: '123456' }} />);

    const docInput = screen.getByLabelText('Digite seu CPF/CNPJ');
    fireEvent.change(docInput, { target: { value: '12345678901' } });
    fireEvent.click(screen.getByText('Liberar'));

    
    expect(screen.getByText('Rua Estácio de Sá, 1234')).toBeInTheDocument(); 
  });
});
