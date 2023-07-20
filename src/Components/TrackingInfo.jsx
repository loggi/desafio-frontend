import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { format } from "date-fns";
import { getOrder } from "../api/api";


export default function TrackingInfo({ trackingId }) {
    const [trackingCode, setTrackingCode] = useState("");
    const [trackingStatus, setTrackingStatus] = useState("")
    const [history, setHistory] = useState([])

    useEffect(() => {
        const fetchTrackingCode = async () => {
            try {
                const response = await getOrder(trackingId);
                setTrackingCode(response.data.id)

                if (response.data.status === "FINALIZADO") {
                    setTrackingStatus("Seu pacote já foi entregue!")
                } else if (response.data.status === "EM_ROTA_DE_ENTREGA") {
                    setTrackingStatus("Seu pacote está a caminho!")
                } else if (response.data.status === "EM_ROTA_PARA_COLETA") {
                    setTrackingStatus("Estamos a caminho do seu pacote!")
                } else if (response.data.status === "PEDIDO_RECEBIDO") {
                    setTrackingStatus("Recebemos o seu pedido!")
                } else if (response.data.status === "PACOTE_COLETADO") {
                    setTrackingStatus("Coletamos o seu pacote!")
                }

                setHistory(response.data.historicoStatus)

            } catch (error) {
                console.error("Erro ao obter o código de rastreio:", error);
            }
        };

        fetchTrackingCode();

    }, [trackingId]);

    const formatDate = (dateString) => {
        const [datePart, timePart] = dateString.split(' ');
        const [day, month, year] = datePart.split('-');
        const [hour, minute] = timePart.split(':');

        const date = new Date(year, month - 1, day, hour, minute);

        if (!isNaN(date.getTime())) {
            const formattedDate = format(date, "dd/MM/yyyy");
            const formattedTime = `${hour}:${minute.padStart(2, '0')}`;
            return `em ${formattedDate} às ${formattedTime}`;
        } else {
            return "Data inválida";
        }
    };


    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#006AFF",
                marginTop: "auto",
                color: "#ffffff",
                padding: "20px",
            }}
        >
            <Typography variant="h5">
                {trackingStatus}
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <List
                    sx={{
                        width: "90vw",
                        maxWidth: "600px",
                        
                    }}
                >
                    {history.map((status, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={status.descricao}
                                secondaryTypographyProps={{
                                    style: {
                                        color: "#ffffff",
                                        textAlign: "end",
                                    },
                                }}
                                secondary={formatDate(status.dataStatus)}
                                sx={{
                                    textAlign: "end",
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Link
                    href="#/"
                    sx={{
                        color: "#ffffff",
                        textDecorationColor: "#ffffff",
                        marginTop: "20px",
                    }}
                >
                    O que significa cada status?
                </Link>
            </Box>

        </Container>
    );
};