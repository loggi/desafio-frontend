import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

import { orders } from '@/mocks/orders'

const DynamicMap = dynamic(() => import('../../../components/Map'), {
  ssr: false
})

export default function OrderDetails({ params }: { params: { trackingNumber: string } }) {
  const trackingNumber = params.trackingNumber

  if (!trackingNumber) {
    redirect('/')
  }

  const order = orders.find((o) => o.trackingNumber === trackingNumber)

  if (!order) {
    redirect('/')
  }

  return (
    <DynamicMap
      deliveryPersonCoordinates={order.orderDetails.route[0]}
      deliveryAddressCoordinates={order.orderDetails.destinationAddress.coordinates}
    />
  )
}
