import Link from "next/link"
import Image from "next/image"
import { Typography } from "../typography/Typography"
import loggiLogo from "../../assets/loggi-logo.svg"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <Image src={loggiLogo} alt="Logotipo Loggi" width={92} height={31} />
        </div>
        <div className="footer__content">
          <Typography variant="h3">Nossos produtos</Typography>
          <ul>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Envio pelos Correios
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Loggi Fácil
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Loggi Expresso
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Loggi Envios
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <Typography variant="h3">Fazer entregas</Typography>
          <ul>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Entregadores
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Leves
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <Typography variant="h3">Rastrear pacotes</Typography>
          <ul>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Rastreador
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <Typography variant="h3">Loggi</Typography>
          <ul>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Aviso de privacidade aos clientes
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Termos de uso para entregadores
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Termos e condições de uso Loggi Fácil (Plataforma
                Transportadora)
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Termos e Condições de Uso de Clientes
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__link" href="#">
                Tratamento de Dados Pessoais Para Fornecedores
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
