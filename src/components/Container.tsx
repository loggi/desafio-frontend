'use client'
import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";

type ContainerProps = {
  children: React.ReactNode;
};

let scrollPosition = 0;
export default function Container({ children }: ContainerProps) {
  const [scrollRatio, setScrollRatio] = useState(0);

  const handleOnScroll = () => {
    if (window.scrollY <= 80) {
      const factor = Number(Number(window.scrollY).toFixed(1));
      setScrollRatio(factor);
    } else if (window.scrollY < scrollPosition) {
      setScrollRatio(0);
    }
    scrollPosition = Number(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* <div className="h-[80px] w-full"> */}
        <Topbar scrollRatio={scrollRatio} />
      {/* </div> */}
      <div className="bg-white flex flex-1">{children}</div>
    </div>
  );
}
