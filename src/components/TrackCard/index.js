import React from 'react';
import { Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

import ExpandCircleDown from '@mui/icons-material/ExpandMore';

const TrackCard = ({ pedidoData, pedidoId }) => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Typography variant="h5" textAlign="center">
                PEDIDO: {pedidoId}
            </Typography>
            <Box>
                <Typography variant="h5" component="p" gutterBottom>
                    <pre>Mensageiro: {pedidoData.mensageiro}</pre>
                    <Divider />
                    <pre>Solicitado por: {pedidoData.cliente}</pre>
                    <Divider />
                    <pre>Data de registro: {pedidoData.dataPedido}</pre>
                    <Divider />
                    <pre>Status atual: {pedidoData.descricao}</pre>
                </Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandCircleDown />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ background: '#006AF0', color: 'white' }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Endereço de entrega
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
                        <Typography variant="h4" component="h1" gutterBottom>
                            Histórico
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h4" component="h1">
                            <Timeline align="alternate">
                                {
                                    pedidoData.historicoStatus.map(itemHistorico => {
                                        return (
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography>{itemHistorico.descricao}</Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    {itemHistorico.status !== 'FINALIZADO' ? <TimelineConnector /> : ''}
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography color="textSecondary">{itemHistorico.dataStatus}</Typography>
                                                </TimelineContent>
                                            </TimelineItem>)
                                    })
                                }
                            </Timeline>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default TrackCard;
