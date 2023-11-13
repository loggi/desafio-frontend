import { TrackingOrder } from '@/types/tracking-order'

export const orders: TrackingOrder[] = [
  {
    trackingNumber: '00000000001',
    status: 'Pending',
    createdAt: '2023-11-12T10:30:00Z',
    orderedBy: {
      id: 'user123',
      name: 'João Silva',
      email: 'joao@example.com'
    },
    deliveredBy: {
      id: 'deliveryPerson456',
      name: 'Maria Entrega',
      contactNumber: '123-456-7890'
    },
    orderDetails: {
      id: 'order789',
      items: ['Item1', 'Item2'],
      totalAmount: 50.99,
      destinationAddress: {
        street: 'Rua Principal, 123',
        city: 'Cidade',
        state: 'Estado',
        zipCode: '12345',
        coordinates: { latitude: -22.85329403321068, longitude: -43.322415107931604 }
      },
      route: [{ latitude: -22.87001481456923, longitude: -43.34106554546864 }],
      statuses: [
        {
          title: 'Pedido Feito',
          description: 'Seu pedido foi realizado.',
          createdAt: '2023-11-12T10:30:00Z'
        },
        {
          title: 'Em Trânsito',
          description: 'Seu pedido está a caminho.',
          createdAt: '2023-11-12T11:00:00Z'
        }
      ]
    }
  },
  {
    trackingNumber: '00000000002',
    status: 'InTransit',
    createdAt: '2023-11-13T12:45:00Z',
    orderedBy: {
      id: 'user456',
      name: 'Ana Oliveira',
      email: 'ana@example.com'
    },
    deliveredBy: {
      id: 'deliveryPerson789',
      name: 'Carlos Entregador',
      contactNumber: '987-654-3210'
    },
    orderDetails: {
      id: 'order654',
      items: ['Item3', 'Item4'],
      totalAmount: 35.5,
      destinationAddress: {
        street: 'Avenida Principal, 456',
        city: 'Cidadela',
        state: 'Estadela',
        zipCode: '54321',
        coordinates: { latitude: -22.85329403321068, longitude: -43.322415107931604 }
      },
      route: [{ latitude: -22.87001481456923, longitude: -43.34106554546864 }],
      statuses: [
        {
          title: 'Pedido Aceito',
          description: 'Seu pedido foi aceito.',
          createdAt: '2023-11-13T12:45:00Z'
        },
        {
          title: 'Saiu para Entrega',
          description: 'Seu pedido saiu para entrega.',
          createdAt: '2023-11-13T13:30:00Z'
        }
      ]
    }
  }
]
