import { ContainerHeader, Logo } from "./Styles";
import LogoIcon from "../../Img/LogoLoggi.png";

const Header = () => {

    return(
        <ContainerHeader>
            <Logo src={LogoIcon}></Logo>
            
        </ContainerHeader>
    );
}

export default Header;