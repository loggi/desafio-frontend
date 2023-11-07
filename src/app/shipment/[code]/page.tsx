import React from "react";
import { Steps, ShipmentList } from "@/components";
import { Box, Grid, Typography } from "@mui/material";
import { getShipmentByGet } from "@/service";

export default async function ShipmentDetails({
  params,
}: {
  params: { code: string };
}) {
  const { data } = await getShipmentByGet(params.code);

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
      <Grid item md={12} marginBottom={5}>
        <Steps activeSteps={data[0].status} />
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <ShipmentList shipments={data} />
      </Grid>
    </Grid>
  );
}
