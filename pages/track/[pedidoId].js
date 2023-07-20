import React, { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { trackOrder } from "../../src/api/orderApi";
import { ExpandCircleDown } from "@mui/icons-material";


export default function Track() {
    const router = useRouter();
    const { pedidoId } = router.query;
    const [pedidoData, setPedidoData] = useState(null);

    useEffect(() => {
        if (pedidoId) {
            trackOrder(pedidoId)
                .then((data) => setPedidoData(data))
                .catch((error) => console.error(error));
        }
    }, [pedidoId]);

    return (
        <Container sx={{
            textAlign: "center",
            display: 'flex',
        }}>
            <Box sx={{

            }}
            >
                {pedidoData ? (
                    <Box textAlign="center">
                        <Typography variant="h3" component="h1" gutterBottom>
                            Pedido: {pedidoId}
                            <pre>Mensageiro: {pedidoData.mensageiro}</pre>
                            <pre>Solicitado por: {pedidoData.cliente}</pre>
                            <pre>Data de registro: {pedidoData.dataPedido}</pre>
                            <pre>Status atual: {pedidoData.status}</pre>
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandCircleDown />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ background: '#006AF0', color: 'white' }}>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Endereço de Entrega
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="p" gutterBottom>
                                    Logradouro: {pedidoData.localEntrega.logradouro},
                                    número: {pedidoData.localEntrega.numero},
                                    complemento: {pedidoData.localEntrega.complemento},
                                    bairro: {pedidoData.localEntrega.bairro}
                                </Typography>
                                <Typography variant="p" component="h5" gutterBottom>
                                    {pedidoData.localEntrega.cidade} / {pedidoData.localEntrega.estado} - CEP: {pedidoData.localEntrega.cep}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandCircleDown />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ background: '#006AF0', color: 'white' }}>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Endereço de origem
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="p" gutterBottom>
                                    Logradouro: {pedidoData.localOrigem.logradouro},
                                    número: {pedidoData.localOrigem.numero},
                                    complemento: {pedidoData.localOrigem.complemento},
                                    bairro: {pedidoData.localOrigem.bairro}
                                </Typography>
                                <Typography variant="p" component="h5" gutterBottom>
                                    {pedidoData.localOrigem.cidade} / {pedidoData.localOrigem.estado} - CEP: {pedidoData.localOrigem.cep}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandCircleDown />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ background: '#006AF0', color: 'white' }}>
                                <Typography variant="h4" component="h1">
                                    Histórico do status
                                </Typography>
                            </AccordionSummary>
                        </Accordion>
                    </Box>
                ) : (
                    <Typography variant="h1" component="h1" gutterBottom >
                        skjdnskdjn
                    </Typography>
                )}
            </Box>
        </Container>
    );
}
