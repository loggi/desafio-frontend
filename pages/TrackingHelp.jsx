import * as React from 'react';
import { Link, Container, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';

export default function TrackingHelp() {
    return (
        <>
            <Header />
            
            <Container sx={{ marginTop: 3 }}>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    O que significa cada status?
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "start",
                    }}
                >
                    Status: Em rota para coleta
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Este status indica que o pacote está em trânsito
                    para o local de coleta, onde será recolhido pelo
                    serviço de entrega para o início do processo de
                    envio.
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Status: Pedido recebido
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    O status Pedido recebido é atribuído quando o pedido
                    é registrado no sistema, indicando que o pacote foi
                    registrado para envio, mas ainda não foi coletado
                    pela transportadora.
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Status: Pacote coletado
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Pacote coletado significa que o pacote foi coletado
                    pela transportadora e está em trânsito para o centro
                    de distribuição ou para a rota de entrega.
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Status: Em rota de entrega
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Quando o status do pacote está Em rota de entrega, 
                    isso significa que o pacote está a caminho do 
                    endereço de entrega fornecido. Está próximo da 
                    conclusão da entrega.
                </Typography>

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Status: Finalizado
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    O status Finalizado indica que a entrega do pacote 
                    foi concluída com sucesso. O pacote foi entregue 
                    com sucesso ao destinatário ou ao ponto de coleta 
                    escolhido.
                </Typography>
            </Container>
            <Link
                href="/"
                sx={{
                    color: "#000000",
                    textDecorationColor: "#000000",
                    marginTop: "40px",
                }}
            >
                Voltar
            </Link>

            <Footer />
        </>
    );
}