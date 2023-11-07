import React from "react";
import { Box } from "@mui/material";

/**
 * should be used only once in the root app/layout or if you need to override
 * @param param0
 * @returns
 */

export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
