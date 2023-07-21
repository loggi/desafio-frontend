import { ContainerHeader, LogoImagem, IconMenu } from "./Styled";
import logo from "../../Imagens/iconLoggi.png";
import { TextHeader, ButtonHeader } from "./Styled";

function Header() {
  return (
    <ContainerHeader>
      <IconMenu/>
      <LogoImagem src={logo} alt="logo do site"></LogoImagem>
      <TextHeader>Para você</TextHeader>
      <TextHeader>Para empresas</TextHeader>
      <TextHeader>Para entregar</TextHeader>
      <TextHeader>Vendas e suporte</TextHeader>
      <TextHeader>Acompanhe seu pedido</TextHeader>
      <ButtonHeader>ENTRAR</ButtonHeader>
      <ButtonHeader>CRIAR CONTA</ButtonHeader>
    </ContainerHeader>
  );
}

export default Header;
