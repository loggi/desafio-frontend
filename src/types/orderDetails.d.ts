type OrderDetails = {
  orderNumber: string;
  trackingNumber: string;
  status: string;
  estimatedDeliveryDate: string;
  location: string;
  history: {
    timestamp: string;
    status: string;
    location: string;
  }[];
};
