import { ContainerHeader, Logo, Paragrafo, Button, BlueText, HamburgerIcon } from "./Styles";
import LogoIcon from "../../Img/LogoLoggi.png";
import ImgHamburger from "../../Img/Hamburger.png";

const Header = ({showButton = true, showBackButton = false, onBackButtonClick }) => {

    return(
        <ContainerHeader>
            <Logo src={LogoIcon} alt="LogoLoggi"></Logo>
            <Paragrafo>Para você</Paragrafo>
            <Paragrafo>Para Empresas</Paragrafo>
            <Paragrafo>Vendas e suporte</Paragrafo>
            <BlueText>Acompanhe seu pedido</BlueText>
            
            {showButton && <Button>Entrar</Button>}
            {showButton && <Button>Criar Conta</Button>}

            {showBackButton && <Button onClick={onBackButtonClick}>Voltar</Button>}

            <HamburgerIcon src={ImgHamburger}></HamburgerIcon>
        </ContainerHeader>
    );
}

export default Header;