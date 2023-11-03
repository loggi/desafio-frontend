export enum ORDER_STATUS {
  ordered = "ordered",
  packed = "packed",
  transit = "transit",
  delivered = "delivered",
}

export type OrderInfoProps = {
  id: number;
  orderNumber: string;
  product: string;
  date: string;
  status: ORDER_STATUS;
};

export type OrderResultsProps = OrderInfoProps[];

export type PromiseDataProps = {
  order: OrderInfoProps;
  error?: string;
};
