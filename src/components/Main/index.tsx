"use client";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Form from "../Form";
import OrderResult from "../OrderResult";
import { OrderInfoProps, PromiseDataProps } from "../types";

type MainProps = {
  fetchOrders: (orderNumber: string) => Promise<PromiseDataProps>;
};
export default function Main({ fetchOrders }: MainProps) {
  const phoneRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLImageElement>(null);
  const [orderInfo, setOrderInfo] = useState<OrderInfoProps | null>();
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState("");

  function handleOnScroll() {
    if (window.scrollY < 250) {
      phoneRef.current!.style.right = `-${690 - window.scrollY * 2.8}px`;
      contentRef.current!.style.left = `-${690 - window.scrollY * 2.8}px`;
    }
  }

  function handleOnSubmit(orderNumber: string) {
    setLoading(true);
    setError("");
    setOrderInfo(null);
    fetchOrders(orderNumber)
      .then((data) => {
        if (data.error) {
          setOrderInfo(null);
          setError(data.error);
        }
        if (data?.order) {
          setOrderInfo(data.order);
          setError("");
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <article className="w-full bg-[#0172ff]">
      <div className="w-full flex flex-col items-center px-24 mt-[100px] bg-gradient-to-b via-cyan-500 from-[#0172ff] to-white">
        <h1 className="text-white max-w-xl">
          Melhor preço, envios rápidos e entrega em todo Brasil
        </h1>
        <h2 className="text-white">Rastreie seu pedido</h2>
        <div className="w-full flex justify-center">
          <Form handleSubmitCallback={handleOnSubmit} />
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center gap-5 mt-[50px]">
            <CircularProgress
              color="inherit"
              size={70}
              className="text-white"
            />
            <span className="text-white text-lg">Buscando seu pedido...</span>
          </div>
        ) : (
          <>{orderInfo && <OrderResult order={orderInfo} />}</>
        )}

        {hasError && (
          <span className="text-white text-lg mt-[50px]">
            Pedido não encontrado
          </span>
        )}

        <div className="flex justify-between items-center mt-[50px]">
          <div ref={contentRef} className="w-[50%] relative  left-[-420px]">
            <h2>Loggi Fácil</h2>
            <p>
              Envios seguros e baratos para todo o país. Com coleta agendada,
              sem precisar imprimir etiqueta ou embalar.
            </p>
            <h2>Loggi Envio pelos Correios</h2>
            <p>
              Contrate seu frete dos correios com a Loggi e economize até 45%.
              Emita uma etiqueta com desconto.
            </p>
          </div>
          <Image
            className="relative  right-[-690px] z-0"
            ref={phoneRef}
            src="/loggi-app-phone.png"
            alt="Aplicativo da Loggi"
            width={"647"}
            height={"643"}
          />
        </div>
      </div>
    </article>
  );
}
