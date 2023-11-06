import React from "react";
import { Steps } from "@/components";
import { Box, Grid, Typography } from "@mui/material";

export default function ShipmentDetails() {
  return (
    <Grid container justifyContent="center">
      <Box justifyContent="center" alignContent="center" marginBottom={5}>
        <Typography align="center" variant="h5" marginBottom={1}>
          Acompanhe seu pacote
        </Typography>
        <Typography align="center" variant="subtitle2">
          Rapido, Fácil e Intuitivo. Aqui voce encontra todos os detalhes do seu
          pacote!
        </Typography>
      </Box>
      <Grid item md={12} marginBottom={10}>
        <Steps />
      </Grid>
    </Grid>
  );
}
