"use client";

import TrackOrder from "@/components/TrackOrder";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import QrCode from "@/components/QrCode";
import { useOrderStore } from "@/store/useOrderStore";

export default function HomePage() {
  const [showOrder, setShowOrder] = useState(false);
  const { orderId } = useOrderStore();

  useEffect(() => {
    // Coloquei um pedido fixo para exemplificar sem banco e ou API
    if (orderId === "ME23151F0A2BR") {
      setShowOrder(true);
    }
  }, [orderId]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.100",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "primary.main",
          py: 12,
          px: 2,
          backgroundImage: ["none", "none", "url(images/banner.svg)"],
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          spacing={4}
        >
          <Grid xs={12} md={6}>
            <TrackOrder />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{ color: "grey.50", textAlign: ["center", "left", "left"] }}
          >
            <QrCode />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 8,
          px: 2,
          width: "100%",
        }}
      >
        {showOrder && (
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid xs={12} sx={{ mb: 2 }}>
              <Typography variant="h5">Seu produto está a caminho</Typography>
            </Grid>
            <Grid xs={12}>
              <ProductCard />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
