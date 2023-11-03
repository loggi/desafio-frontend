const ORDER_STATUS = {
  ordered: 'ordered',
  packed: 'packed',
  transit: 'transit',
  delivered: 'delivered',
}

const orders = [
  {
    id: 1,
    orderNumber: '1231122',
    product: 'Pen Drive Sony 32GB',
    date: '2023-07-21T01:39:59.008Z',
    status: ORDER_STATUS.transit,
  },
  {
    id: 2,
    orderNumber: '4334432',
    product: 'iPhone 14',
    date: '2023-07-18T03:19:47.008Z',
    status: ORDER_STATUS.delivered,
  },
  {
    id: 3,
    orderNumber: '8367289',
    product: 'Keyboard Keycron 2',
    date: '2023-07-12T11:05:32.008Z',
    status: ORDER_STATUS.ordered,
  },
  {
    id: 4,
    orderNumber: '93778221',
    product: 'Cam Go Pro',
    date: '2023-07-15T06:01:57.008Z',
    status: ORDER_STATUS.packed,
  },
]

export const getOrder = async (orderNumber) => {
  const order = orders.find(order => order.orderNumber === orderNumber)

  if (!order) {
    return Promise.reject(new Error('No order found!'))
  }

  return Promise.resolve(order)
}
