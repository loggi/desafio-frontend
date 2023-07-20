import * as React from "react";
import { Container, Typography } from "@mui/material";
import Form from './Form';

export default function Head() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        background: "#006AFF",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Acompanhe o seu pacote do momento que ele chega em nossas mãos, até
        chegar ao seu destino.
      </Typography>
      <Form/>
    </Container>
  );
}
