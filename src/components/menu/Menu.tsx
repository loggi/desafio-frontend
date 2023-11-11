import Link from "next/link"
import { LinkButton } from "../linkButton/LinkButton"
import "./Menu.css"

interface MenuProps {
  open: boolean
}

export const Menu = ({ open }: MenuProps) => {
  return (
    <nav className={`${open ? "nav nav--open" : "nav"}`}>
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" href="#">
            Produtos
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/">
            Rastrear
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="#">
            Entregadores
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="#">
            Entrar
          </Link>
        </li>
        <li className="menu__item">
          <LinkButton variant="inverse" href="#">
            Criar conta
          </LinkButton>
        </li>
      </ul>
    </nav>
  )
}
