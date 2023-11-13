export type DeliveryStatus = 'Pending' | 'InTransit' | 'OutForDelivery' | 'Delivered' | 'Failed'

export type Coordinates = {
  latitude: number
  longitude: number
}

export type Address = {
  street: string
  city: string
  state: string
  zipCode: string
  coordinates: Coordinates
}

export type Status = {
  title: string
  description: string
  createdAt: string
}

export type User = {
  id: string
  name: string
  email: string
}

export type DeliveryPerson = {
  id: string
  name: string
  contactNumber: string
}

export type Order = {
  id: string
  items: string[]
  totalAmount: number
  destinationAddress: Address
  route: Coordinates[]
  statuses: Status[]
}

export type TrackingOrder = {
  trackingNumber: string
  status: DeliveryStatus
  createdAt: string
  orderedBy: User
  deliveredBy: DeliveryPerson
  orderDetails: Order
}
