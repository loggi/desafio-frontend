import { z } from "zod";

export const itemSchema = z.object({
  name: z.string(),
  quantity: z.number(),
  weight: z.string(),
  description: z.string(),
});

export const packageSchema = z.object({
  id: z.string(),
  trackingNumber: z
    .string()
    .min(5, { message: "Campo deve possuir no mínimo 5 carateres" }),
  origin: z.string(),
  destination: z.string(),
  estimatedDeliveryDate: z.string(),
  status: z.string(),
  currentLocation: z.string(),
  shipmentType: z.string(),
  userCpf: z
    .string()
    .max(11, { message: "Campo pode ter no máximo 11 caracteres" }),
  items: z.array(itemSchema),
});

export enum DeliveryStatus {
  IN_TRANSIT = "Em Transito",
  DELIVERED = "Entregue",
  OUT_FOR_DELIVERY = "Saiu para Entrega",
}

export type Shipment = z.infer<typeof packageSchema>;
