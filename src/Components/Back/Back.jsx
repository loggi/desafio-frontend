import { Link } from 'react-router-dom';
import { BackButton } from "./Styled";

function Back() {
  return (
    <Link to="/">
      <BackButton>VOLTAR</BackButton>
    </Link>
  );
}

export default Back;