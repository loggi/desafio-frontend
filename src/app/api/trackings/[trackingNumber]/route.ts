import { orders } from '@/mocks/orders'

export async function GET(request: Request, { params }: { params: { trackingNumber: string } }) {
  const trackingNumber = params.trackingNumber

  const order = orders.find((o) => o.trackingNumber === trackingNumber)

  if (!order) {
    return Response.json({ error: 'Código de rastreamento não encontrado ou inválido' }, { status: 404 })
  }

  return Response.json(order, { status: 200 })
}
