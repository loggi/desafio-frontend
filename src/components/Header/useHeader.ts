import { useState } from "react";

type HeaderMethods = {
  isOpen: boolean;
  handleOpenMenu: () => void;
};

export function useHeader(): HeaderMethods {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return {
    isOpen,
    handleOpenMenu,
  };
}
