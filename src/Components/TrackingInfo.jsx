import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { getOrder } from "../api/api";


export default function TrackingInfo({ trackingId }) {
    const [trackingCode, setTrackingCode] = useState("");
    const [trackingStatus, setTrackingStatus] = useState("")

    useEffect(() => {
        const fetchTrackingCode = async () => {
            try {
                const response = await getOrder(trackingId);
                setTrackingCode(response.data.id)
                setTrackingStatus(response.data.descricao)
            } catch (error) {
                console.error("Erro ao obter o código de rastreio:", error);
            }
        };

        fetchTrackingCode();

    }, [trackingId])



    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                backgroundColor: "#ffffff",
                marginTop: "auto",
            }}
        >
            <Box >
            <Typography variant="h4" color="#000000">
                Status do seu pacote: 
            </Typography>
            <Typography variant="h6" color="#000000">
            {trackingStatus}
            </Typography>
            </Box>
            <Box >
            <Typography variant="h4" color="#000000">
            Código de rastreio: 
            </Typography>
            <Typography variant="h6" color="#000000">
                {trackingCode}
            </Typography>
            </Box>
            
        </Container>
    );
};