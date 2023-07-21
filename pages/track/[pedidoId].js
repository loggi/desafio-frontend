import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { trackOrder } from "../../src/api/orderApi";
import { styled } from '@mui/material/styles';
import TrackCard from "../../src/components/TrackCard";


const StyledContainer = styled('div')({
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: '0 10%',
    borderBottomRightRadius: '70%',
    borderBottomLeftRadius: '18%',
    borderBottom: '30px solid #002766',
    borderTop: '100px solid #D9D9D9'

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
        conteudo = <Box>
            <Typography variant="h3" component="h3" gutterBottom > Não encontramos seu pedido! :(</Typography>
            <Typography variant="h3" component="p" gutterBottom >
                Verifique se o código de rastreamento está correto e tente novamente.
            </Typography>
        </Box>
    }

    if (pedidoData) {
        conteudo = <TrackCard pedidoData={pedidoData} pedidoId={pedidoId} />
    }
    return (
        <>
            <StyledContainer>
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
