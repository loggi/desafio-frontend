import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { getOrder } from "../api/api";

export default function Head() {
  const [trackingCode, setTrackingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleTrackingCode = async (e, code) => {
    e.preventDefault();

    if (!trackingCode) {
      setErrorMessage("Por favor, insira o código de rastreio.");
      return;
    } else {
      try {
        const codeValidate = await getOrder(trackingCode);
        console.log('getOrder response', codeValidate)
        if (codeValidate.status === 200) {
          setErrorMessage("");
          setTrackingCode("");
          router.push("/Tracking");
        }
      } catch (error) {
        setErrorMessage("Código inválido.")
      }
    }
  }
  return (
    <Box
      sx={{
        background: "#ffffff",
        width: "90%",
        maxWidth: "600px",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{
          textAlign: "center",
        }}
      >
        Digite seu código de rastreio:
      </Typography>
      <TextField
        onChange={(e) => setTrackingCode(e.target.value)}
        value={trackingCode}
        id="outlined-basic"
        label="Código de rastreio"
        variant="outlined"
        required
        fullWidth
        sx={{
          marginTop: "20px",
        }}
      />
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "center",
          color: "#CC0014",
        }}
      >
        {errorMessage}
      </Typography>
      <Button
        onClick={(e) => handleTrackingCode(e, trackingCode)}
        variant="contained"
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,186,255,1) 0%, rgba(0,106,255,1) 75%)",
          color: "#ffffff",
          marginTop: "20px",
        }}
      >
        Acompanhar pacote
      </Button>
      <Link
        href="#/"
        sx={{
          color: "#000000",
          textDecorationColor: "#000000",
          marginTop: "20px",
        }}
      >
        Como encontro o código de rastreio?
      </Link>
    </Box>
  );
}
