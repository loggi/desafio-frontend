import OrdersService from "@/services/OrdersService";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";

type UseTrackerForm = {
  handleSubmit: (event: SyntheticEvent) => Promise<void>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearError: () => void;
  isLoading: boolean;
  error?: string;
};

export function useTrackerForm(): UseTrackerForm {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function clearError() {
    setError(null);
  }

  function handleChange() {
    if (error) {
      clearError();
    }
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const { trackCode } = event.target as typeof event.target & {
      trackCode: { value: string };
    };

    if (!trackCode.value) {
      setError("Digite um código válido");
      return;
    }

    try {
      setIsLoading(true);
      const response = await OrdersService.getOrder(trackCode.value);

      const { orderNumber, trackingNumber } = response;

      router.push(`/rastreador/${orderNumber}/${trackingNumber}`);
    } catch (error) {
      if (error.message.includes(404)) {
        setError("Não encontramos pedidos com esse código");
      } else {
        setError("Ocorreu um erro ao buscar o pedido");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleSubmit,
    clearError,
    handleChange,
    isLoading,
    error,
  };
}
