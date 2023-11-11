import { Typography } from "../typography/Typography"
import { LinkButton } from "../linkButton/LinkButton"
import "./AttainNewCustomers.css"

export const AttainNewCustomers = () => {
  return (
    <section className="attain-new">
      <div className="attain-new__wrapper">
        <Typography variant="h2">
          A melhor solução para envio de encomendas no Brasil.
        </Typography>
        <Typography>
          Alcance mais clientes com entregas locais e nacionais. Com a Loggi,
          você economiza tempo e dinheiro.
        </Typography>
        <LinkButton href="#">Enviar agora</LinkButton>
      </div>
    </section>
  )
}
