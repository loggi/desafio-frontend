"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { TrackingInfo } from "@/components";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Map = dynamic(
  () => import("@/components/map").then((module) => module.Map),
  { ssr: false }
);

export default function HomePage() {
  const [trackingCode, setTrackingCode] = useState("");
  const [delivery, setDelivery] = useState<any>();
  const [error, setError] = useState<any>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTrackingCode(event.currentTarget.trackingCode.value);
  };

  const getTracking = useCallback(async () => {
    const response = await fetch(
      `http://localhost:3000/api/tracking?trackingCode=${trackingCode}`
    );
    const { data, hasError } = await response.json();

    setError(hasError);
    setDelivery(data);
  }, [trackingCode]);

  useEffect(() => {
    getTracking();
  }, [getTracking]);

  function renderDelivery() {
    if (!delivery) return;

    return <TrackingInfo trackingInfo={delivery} />;
  }

  function renderError() {
    if (error) {
      return (
        <Typography variant="h5" color={red}>
          Código de rastreio não encontrado
        </Typography>
      );
    }
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "80px",
          height: "100vh",
        }}
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "350px",
            margin: "20px 0",
          }}
        >
          <Typography component="h1" variant="h5">
            Olá! <br /> Acompanhe com a Loggi a entrega do seu pedido. 😃
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="trackingCode"
              label="Código de rastreamento"
              name="trackingCode"
              autoFocus
            />

            <Button type="submit" variant="contained">
              Acompanhar pedido
            </Button>
          </Box>
        </Box>

        {renderError()}
        {renderDelivery()}
      </Grid>

      <Grid
        item
        xs={false}
        sx={{ height: "100vh", overflow: "hidden" }}
        sm={4}
        md={7}
      >
        <Map
          sender={delivery?.sender?.address}
          receiver={delivery?.receiver?.address}
        />
      </Grid>
    </Grid>
  );
}
