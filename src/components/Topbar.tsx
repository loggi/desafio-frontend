import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRef, useState } from "react";
import LoggiLogo from "./svg/LoggiLogo";

const MENU_ITEMS = [
  { label: "Produtos", href: "#" },
  { label: "Rastrear", href: "#" },
  { label: "Entregadores", href: "#" },
  { label: "Central de Ajuda", href: "#" },
];

const primary = "#0172ff";

type TopbarProps = {
  scrollRatio?: number;
};

export default function Topbar({ scrollRatio = 0 }: TopbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleOnClick() {
    menuRef.current!.classList.toggle("hidden");
    setOpen(!open);
  }

  return (
    <div
      className="text-white h-[60px] w-full flex fixed z-10 border-b shadow-md"
      style={{
        backgroundColor: primary,
        top: `-${scrollRatio * 2}px`,
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-full h-full flex sm:justify-between px-4">
        <div className="flex items-center justify-between w-full">
          <LoggiLogo color="white" width="100" height="33" />

          <div
            ref={menuRef}
            className="hidden sm:block w-full h-screen sm:h-auto sm:w-auto sm:relative sm:top-0 absolute left-0 top-[80px] px-4 py-4 sm:pr-8 bg-[#0172ff] sm:bg-opacity-0"
          >
            <ul className="flex flex-col sm:flex-row gap-3 justify-start">
              {MENU_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pr-4 sm:hidden">
            <button
              data-collapse-toggle="menu-default"
              className="w-8 h-8 bg-blue-500 rounded hover:bg-blue-400"
              onClick={handleOnClick}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
