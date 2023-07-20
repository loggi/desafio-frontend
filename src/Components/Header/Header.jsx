import { ContainerHeader, Logo, Paragrafo, Button, BlueText} from "./Styles";
import LogoIcon from "../../Img/LogoLoggi.png";

const Header = () => {

    return(
        <ContainerHeader>
            <Logo src={LogoIcon}></Logo>
            <Paragrafo>Para você</Paragrafo>
            <Paragrafo>Para Empresas</Paragrafo>
            <Paragrafo>Vendas e suporte</Paragrafo>
            <BlueText>Acompanhe seu pedido</BlueText>
            <Button>Entrar</Button>
            <Button>Criar Conta</Button>
        </ContainerHeader>
    );
}

export default Header;