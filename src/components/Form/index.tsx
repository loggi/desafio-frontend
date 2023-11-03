"use client";
import { TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

type FormProps = {
  handleSubmitCallback: (orderNumber: string) => void;
};
export default function Form({ handleSubmitCallback }: FormProps) {
  const [orderNumber, setOrderNumber] = useState("");
  const [hasError, setError] = useState(false);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setOrderNumber(e.target.value);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (orderNumber) {
      handleSubmitCallback(orderNumber);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="w-full flex justify-center max-w-md shadow-md mt-5">
      <form
        onSubmit={handleOnSubmit}
        className="block w-full h-full p-7 bg-[#f4f4f4] rounded-md"
      >
        <div className="w-full h-full flex flex-col gap-5 top-[45px]">
          <TextField
            id="outlined-basic"
            label="Número do pedido"
            placeholder="Digite o número do pedido"
            onChange={handleOnChange}
            variant="outlined"
            sx={{
              background: "#fff",
            }}
          />
          {hasError && (
            <span className="text-red-600">
              Digite um número de pedido válido.
            </span>
          )}
          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-600 h-12 text-white"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
