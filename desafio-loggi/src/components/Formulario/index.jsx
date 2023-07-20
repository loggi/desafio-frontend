import { useState } from 'react';
import { StyledDiv, StyledForm, StyledInput, StyledLabel, StyledH2, StyledP, StyledDivTexto } from './Styles.js'

const Formulario = () => {
    const [pedidoId, setPedidoId] = useState('');

    const handleChange = (event) => {
        setPedidoId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('ID do pedido:', pedidoId);
    };

    return (
        <StyledDiv>
            <StyledDivTexto>
                <StyledH2>
                    Olá!
                </StyledH2>
            </StyledDivTexto>

            <StyledP>
                Acompanhe com a Loggi o status da sua entrega.
            </StyledP>

            <StyledForm>
                <form onSubmit={handleSubmit}>
                    <StyledLabel>
                        Código de rastreamento
                    </StyledLabel>
                    <StyledInput
                        type="text"
                        value={pedidoId}
                        onChange={handleChange}
                        required
                    />
                </form>
            </StyledForm>
        </StyledDiv>
    );
};

export default Formulario;