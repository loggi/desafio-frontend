"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useRouter } from "next/navigation";
import { HOME } from "@/config/route-utils";

type TError = {
  onClick?: () => void;
  text: string;
};
export function Error({ onClick, text }: TError) {
  const router = useRouter();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} />
      <Typography variant="h5" color="textSecondary" sx={{ mt: 2 }}>
        {text}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => router.push(HOME)}
      >
        Voltar
      </Button>
    </Box>
  );
}
