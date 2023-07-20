import { Box, Typography } from "@mui/material"
import iconDelivery from './delivery.png'

function CenteredBox({ children }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem'
            }}
        >
            {children}
        </Box>
    );
}

function BoxDelivery({ messenger, client, orderDate, deliveryDate }) {
    return (
        <CenteredBox>
            <Box sx={{
                width: '506px',
                height: '120px',
                display: 'flex',
                backgroundColor: 'var(--light-blue)',
                alignItems: 'center',
                borderRadius: '10px',
                justifyContent: 'space-evenly'
            }}
            >
                <img src={iconDelivery}
                    alt="icone moto"
                    style={{
                        width: '100px',
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'var(--white)',
                        fontSize: '0.8rem',
                        padding: '0.5rem',
                        borderRadius: '10px'
                    }}
                >
                    <span>Mensageiro: {messenger}</span>
                    <span>Cliente: {client}</span>
                    <span>Data Pedido: {orderDate}</span>
                    <span>Data Prevista de Entega: {deliveryDate}</span>
                </Typography>
            </Box>
        </CenteredBox>
    )
}

export default BoxDelivery;