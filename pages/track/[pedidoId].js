import React, { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Grid, Typography } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { useRouter } from "next/router";
import { trackOrder } from "../../src/api/orderApi";
import { ExpandCircleDown } from "@mui/icons-material";
import Header from "../../src/components/Header";
import { styled } from '@mui/material/styles';


const StyledContainer = styled('div')({
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: '10%',
    borderBottomRightRadius: '70%',
    borderBottomLeftRadius: '18%',
    borderBottom: '30px solid #002766'

});


export default function Track() {
    const router = useRouter();
    const { pedidoId } = router.query;
    const [pedidoData, setPedidoData] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        if (pedidoId) {
            trackOrder(pedidoId)
                .then((data) => setPedidoData(data))
                .catch((error) => setErro(error));
        }
    }, [pedidoId]);
    let conteudo = <Typography variant="h1" component="h1" gutterBottom > ...</Typography>

    if (erro) {
        conteudo = <Typography variant="h1" component="h1" gutterBottom > Não encontramos seu pedido! :( </Typography>
    }

    if (pedidoData) {
        conteudo =
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Typography variant="h5" textAlign="center">
                    PEDIDO: {pedidoId}
                </Typography>
                <Typography variant="h5" component="p" gutterBottom >

                    <pre>Mensageiro: {pedidoData.mensageiro}</pre>
                    <Divider />
                    <pre>Solicitado por: {pedidoData.cliente}</pre>
                    <Divider />
                    <pre>Data de registro: {pedidoData.dataPedido}</pre>
                    <Divider />
                    <pre>Status atual: {pedidoData.status}</pre>
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
    }
    return (
        <>
            <StyledContainer>
                <Header />

                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '3rem'
                    }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {conteudo}
                        </Grid>
                    </Grid>
                </Container>
            </StyledContainer>
        </>
    );
}
