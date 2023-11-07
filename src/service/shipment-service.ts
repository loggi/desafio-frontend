import { SHIPMENT_API, BASE_URL } from "@/config/route-utils";
import { get, post } from "./service-api";

const getShipmentByPost = async (filterType: string, value: string) => {
  return await post(SHIPMENT_API, {
    filterType,
    value,
  });
};

const getShipmentByGet = async (code: string) => {
  const url = `${BASE_URL}/${SHIPMENT_API}?trackingNumber=${code}`;
  return await get(url);
};

export { getShipmentByPost, getShipmentByGet };
