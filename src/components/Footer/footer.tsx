"use client";
import React from "react";
import { Container, Typography, Link, colors } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.grey[100],
        padding: "2%",
        width: "100%",
      }}
    >
      <Container maxWidth="lg" fixed>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()}
          <Link href="https://rivailpinto.com.br"> Rivail dos Santos</Link>
        </Typography>
        <Typography variant="body2" align="center">
          Feito com{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          e Material-UI
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="https://www.linkedin.com/in/rivail-santos-14373997/">
            LinkedIn
          </Link>{" "}
          |{" "}
          <Link href="https://github.com/rivailJunior/desafio-frontend">
            Github
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export { Footer };
