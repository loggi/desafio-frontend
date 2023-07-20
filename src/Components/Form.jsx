import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { getOrder } from "../api/api";
import { setItem } from "../storage";

export default function Form() {
  const [trackingCode, setTrackingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleTrackingCode = async (e, code) => {
    e.preventDefault();

    if (!code) {
      setErrorMessage("Por favor, insira o código de rastreio.");
      return;
    } else {
      try {
        const codeValidate = await getOrder(code);
        if (codeValidate.status === 200) {
          setErrorMessage("");
          setTrackingCode("");
          setItem("id", code)
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
        padding: "35px",
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
          marginTop: "40px",
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
          marginTop: "50px",
        }}
      >
        Acompanhar pacote
      </Button>
      <Link
        href="#/"
        sx={{
          color: "#000000",
          textDecorationColor: "#000000",
          marginTop: "40px",
        }}
      >
        Como encontro o código de rastreio?
      </Link>
    </Box>
  );
}
