import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";

const buttonStyle = {
    backgroundColor: '#00BAFF',
    color: 'black',
    margin: '1rem'
};

const cardStyle = {
    backgroundColor: '#006AF0',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
    display: 'block',
    margin: '0 auto',
};



export default function Forms() {
    const [pedidoId, setPedidoId] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        event.target.value = value.replace(/\D/, '');
        setPedidoId(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('ID do pedido:', pedidoId);
    };

    return (
        <>
            <Card style={cardStyle}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="standard"
                        label="Número do pedido"
                        name="pedidoId"
                        value={pedidoId}
                        type="text"
                        inputProps={{
                            pattern: "[0-9]*",
                            onInput: handleInputChange,
                        }}
                        fullWidth
                        required
                    />
                    <Box textAlign="center">
                        <Button type="submit" style={buttonStyle}>
                            rastrear
                        </Button>
                    </Box>
                </form>
            </Card>
        </>
    )
}



