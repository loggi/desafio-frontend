import { DeliveryStatus } from "@/types/Shipment";

export const getCurrentStep = (deliverStatus: DeliveryStatus) => {
  switch (deliverStatus) {
    case DeliveryStatus.DELIVERED:
      return 4;
    case DeliveryStatus.IN_TRANSIT:
      return 2;
    case DeliveryStatus.OUT_FOR_DELIVERY:
      return 3;
    default:
      return 1;
  }
};
