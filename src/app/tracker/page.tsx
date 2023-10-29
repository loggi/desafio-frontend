"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { TrackerForm } from "@/components/TrackerForm";
import { ShipmentCaptureCta } from "@/components/ShipmentCaptureCta";
import ptBR from "@/_mock/lang/pt-BR";

export default function TrackerPage() {
  const { palette } = useTheme();
  const { form } = ptBR.trackerPage;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundImage: {
          lg: `linear-gradient(${palette.primary.main}, ${palette.primary.light})`,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: {
            sx: 0,
            md: 5,
          },
          paddingLeft: {
            xs: 0,
          },
          paddingRight: {
            xs: 0,
          },
          paddingTop: {
            md: 16,
          },
          paddingBottom: {
            md: 16,
          },
        }}
      >
        <TrackerForm {...form} />
        <ShipmentCaptureCta />
      </Container>
    </Box>
  );
}
