export type TrackingInfoProps = {
  trackingInfo: {
    sender: {
      company_name: string;
      address: address;
    };
    receiver: {
      name: string;
      address: address;
    };
    delivery_deadline: string;
    freight_id: string;
    order_number: string;
    status: status[];
  };
};

export type status = {
  name: string;
  date: string;
  condition: string;
};

export type address = {
  zipcode: string;
  city: string;
  state: string;
  street: string;
  latitude: number;
  longitude: number;
};

export type deliveryDetailProps = {
  title: string;
  address: address;
};
