import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function Head({ home, tracking }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 3,
      }}
    >
      {home && (
        <>
          <Typography variant="h4" component="h3">
            Está chegando?
          </Typography>
          <img
            src="/img/delivery.gif"
            alt="Descrição da imagem"
            width="90%"
            style={{ maxWidth: "500px" }}
          />
        </>
      )}
      {tracking && (
        <>
        <Typography variant="h4" component="h3">
            Detalhes do rastreio
          </Typography>
        <img
          src="/img/on-the-way.png"
          alt="Descrição da imagem"
          width="90%"
          style={{ maxWidth: "500px" }}
        />
        </>
        
      )}
    </Container>
  );
}
