import { create } from "zustand";

export type TOrderPlacedStore = {
  orderId: string;
  setOrder: (orderId: string) => void;
};

export const useOrderStore = create<TOrderPlacedStore>(set => ({
  orderId: "",
  setOrder: orderId => set({ orderId }),
}));
