"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { TrackerForm } from "@/components/TrackerForm";
import { ShipmentCaptureCta } from "@/components/ShipmentCaptureCta";
import { OurServices } from "@/components/OurServices";

export default function TrackerPage() {
  const { palette } = useTheme();

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
            lg: "500px 1fr",
          },
          gap: {
            sx: 0,
            lg: 5,
          },
          padding: {
            xs: 0,
            lg: 8,
          },
          paddingTop: {
            lg: 16,
          },
          paddingBottom: {
            lg: 16,
          },
        }}
      >
        <Box>
          <TrackerForm />
          <ShipmentCaptureCta />
        </Box>
        <OurServices />
      </Container>
    </Box>
  );
}
