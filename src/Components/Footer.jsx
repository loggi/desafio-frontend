import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        backgroundColor: "#ffffff",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Loggi. All rights reserved.
      </Typography>
    </Box>
  );
};