"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ClipBoardIcon, HouseIcon, PackageIcon, TruckIcon } from "./svg/icons";

const iconStyle = {
  position: "relative",
  top: "150px",
  width: "120px",
  height: "120px",
  transition: "all 0.5s ease",
};

type IconContainerProps = {
  style?: { [key: string]: string | number } | {};
  children: React.ReactNode;
};
const IconContainer = forwardRef<HTMLDivElement, IconContainerProps>(
  ({ children, style = {} }, ref) => (
    <div
      className=" border-emerald-600 flex items-center justify-center"
      style={{ ...(typeof style === "object" ? style : {}) }}
      ref={ref}
    >
      {children}
    </div>
  )
);

function animateIcon(element: HTMLDivElement, timer: number) {
  setTimeout(() => {
    element.style.top = "0";
  }, timer);
}

const defaultIconStyle = {
  filter: "grayscale(100%)",
  opacity: "0.5",
};

type OrderIconsProps = {
  status: string;
  onFinishCallback: () => void;
};
const OrderIcons = ({ status, onFinishCallback }: OrderIconsProps) => {
  const clipBoardRef = useRef<HTMLDivElement>(null);
  const packageRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const [packageStyle, setPackageStyle] = useState<
    { [key: string]: string } | {}
  >(defaultIconStyle);
  const [truckStyle, setTruckStyle] = useState<{ [key: string]: string } | {}>(
    defaultIconStyle
  );
  const [houseStyle, setHouseStyle] = useState<{ [key: string]: string } | {}>(
    defaultIconStyle
  );

  useEffect(() => {
    animateIcon(clipBoardRef.current!, 150);
    animateIcon(packageRef.current!, 300);
    animateIcon(truckRef.current!, 450);
    animateIcon(houseRef.current!, 600);
    setTimeout(() => onFinishCallback(), 750);
  }, []);

  useEffect(() => {
    let mode;
    switch (status) {
      case "packed":
        setPackageStyle({});
        break;
      case "transit":
        setPackageStyle({});
        setTruckStyle({});
        break;
      case "delivered":
        setPackageStyle({});
        setTruckStyle({});
        setHouseStyle({});
        break;
      default:
        setPackageStyle(defaultIconStyle);
        setTruckStyle(defaultIconStyle);
        setHouseStyle(defaultIconStyle);
        break;
    }
  }, [status]);

  return (
    <>
      {status && (
        <div className="relative w-full flex items-center justify-center h-[170px]">
          {status && (
            <div className="w-full max-w-[700px] flex items-center justify-around overflow-hidden">
              <IconContainer ref={clipBoardRef} style={{ ...iconStyle }}>
                <ClipBoardIcon width="120px" height="120px" />
              </IconContainer>
              <IconContainer
                ref={packageRef}
                style={{ ...iconStyle, paddingTop: "20px" }}
              >
                <PackageIcon width="90px" height="90px" style={packageStyle} />
              </IconContainer>
              <IconContainer
                ref={truckRef}
                style={{ ...iconStyle, paddingTop: "15px" }}
              >
                <TruckIcon width="100px" height="100px" style={truckStyle} />
              </IconContainer>
              <IconContainer ref={houseRef} style={{ ...iconStyle }}>
                <HouseIcon width="100px" height="100px" style={houseStyle} />
              </IconContainer>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default OrderIcons;
