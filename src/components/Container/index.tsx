import React from "react";
import { Box, Container } from "@mui/material";

/**
 * should be used only once in the root app/layout or if you need to override
 * @param param0
 * @returns
 */

export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      style={{ minHeight: "100vh", overflow: "auto", paddingTop: "7%" }}
    >
      {children}
    </Container>
  );
}
