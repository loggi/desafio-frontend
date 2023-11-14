import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

import { orders } from '@/mocks/orders'
import { OrderDetails } from '@/components/OrderDetails'
import { Suspense } from 'react'

const DynamicMap = dynamic(() => import('@/components/Map'), {
  ssr: false
})

export default function Order({ params }: { params: { trackingNumber: string } }) {
  const trackingNumber = params.trackingNumber

  if (!trackingNumber) {
    redirect('/')
  }

  const order = orders.find((o) => o.trackingNumber === trackingNumber)

  if (!order) {
    redirect('/')
  }

  return (
    <div className='flex w-full h-screen relative'>
      <Suspense>
        <OrderDetails order={order} />
      </Suspense>
      <DynamicMap
        deliveryPersonCoordinates={order.orderDetails.route[0]}
        deliveryAddressCoordinates={order.orderDetails.destinationAddress.coordinates}
      />
    </div>
  )
}
