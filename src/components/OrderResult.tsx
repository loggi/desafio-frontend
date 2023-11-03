"use client";
import { useEffect, useRef, useState } from "react";
import OrderIcons from "./OrderIcons";
import { PromiseDataProps } from "./types";

const orderInfoStyle = {
  position: "relative",
  top: "220px",
  transition: "all 0.3s ease",
};

export default function OrderResult({ order }: PromiseDataProps) {
  const [spritePosition, setSpritePosition] = useState("0 -45px");
  const [status, setStatus] = useState();
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (order?.status) {
      let pos = spritePosition;
      switch (order?.status) {
        case "ordered":
          pos = "0 -45px";
          break;
        case "packed":
          pos = "0 -220px";
          break;
        case "transit":
          pos = "0 -390px";
          break;
        case "delivered":
          pos = "0 -560px";
          break;
        default:
          pos = "0 100px";
          break;
      }
      setSpritePosition(pos);
    }
  }, [order]);

  function startInfoAnimation() {
    infoRef.current!.style.top = "0";
  }

  function formatDate(date: string) {
    const d = new Date(date);
    const formated = `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;

    return formated;
  }

  return (
    <>
      {order && (
        <>
          <OrderIcons
            status={order.status}
            onFinishCallback={startInfoAnimation}
          />
          <div className="w-full flex justify-center relative overflow-hidden">
            <div
              className="relative top-[220px] p-4 bg-[#f4f4f4] rounded-md shadow-md transition-all duration-300 transition-timing-function: cubic-bezier(0.4, 0, 1, 1) flex items-center justify-start w-full max-w-[700px] p-10d"
              ref={infoRef}
            >
              <ul className="flex flex-col gap-2 text-xl">
                <li>
                  Product: <strong>{order.product}</strong>
                </li>
                <li>
                  Status: <strong>{order.status}</strong>
                </li>
                <li>
                  Order number: <strong>{order.orderNumber}</strong>
                </li>
                <li>
                  Order date: <strong>{formatDate(order.date)}</strong>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
