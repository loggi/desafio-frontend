"use client";
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

import { Error } from "@/components";

const ErrorPage = () => {
  return (
    <Container>
      <Error text="Oops. Algo deu errado!" />
    </Container>
  );
};

export default ErrorPage;
