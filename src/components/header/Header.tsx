"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "../menu/Menu"
import loggiLogo from "../../assets/loggi-logo-white.svg"
import "./Header.css"

export const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className="header">
      <div className="header__grid">
        <Link href="/">
          <Image src={loggiLogo} alt="Logotipo Loggi" width={92} height={31} />
        </Link>
        <button
          className="nav__button"
          aria-label="abrir menu"
          onClick={handleOpen}
        >
          Menu
        </button>
        <Menu open={open} />
      </div>
    </header>
  )
}
