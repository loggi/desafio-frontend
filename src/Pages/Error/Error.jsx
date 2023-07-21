import error from "../../Imagens/error.png";
import {
  StyledLink,
  DivError,
  ImgError,
  TittleError,
  TextError,
  ButtonError,
} from "./Styled";

function Error() {
  return (
    <DivError>
      <ImgError src={error} alt="imagem de error"></ImgError>
      <TittleError>
        Ops! Não encontramos o código de rastreio digitado!
      </TittleError>
      <TextError>
        Parece que você digitou um código de rastreamento incorreto, pois não
        encontramos nenhuma informação correspondente. Por favor, verifique o
        código digitado e tente novamente
      </TextError>
      <StyledLink to="/">
        <ButtonError>TENTAR NOVAMENTE</ButtonError>
      </StyledLink>
    </DivError>
  );
}

export default Error;
