// import './App.css'
import { ContainerHeader, LogoImagem, IconMenu } from "./Styled";
import logo from "../../Imagens/iconLoggi.png";

function Header() {
  return (
    <ContainerHeader>
      <IconMenu/>
      <LogoImagem src={logo} alt="logo do site"></LogoImagem>
    </ContainerHeader>
  );
}

export default Header;
