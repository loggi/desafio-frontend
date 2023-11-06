import { SHIPMENT_API } from "@/config/route-utils";
import { post } from "./service-api";

const getShipmentByPost = async (filterType: string, value: string) => {
  return await post(SHIPMENT_API, {
    filterType,
    value,
  });
};

export { getShipmentByPost };
