"use client";

import { useOrderStore } from "@/store/useOrderStore";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function TrackOrder() {
  const [inputValue, setInputValue] = useState("");
  const { setOrder } = useOrderStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrder(inputValue);
    console.log("Valor do campo:", inputValue);
  };

  return (
    <Card component="form" color="text.primary" onSubmit={handleSubmit}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "regular" }}
        >
          Olá! <br />
          Acompanhe com a Loggi a entrega do seu pedido. 😃
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Primeiro, digite o código de rastreamento.
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Código de rastreamento"
          placeholder="Ex: ME23151F0A2BR"
          sx={{ mt: 4, width: "100%" }}
          value={inputValue}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </CardContent>

      <CardActions sx={{ justifyContent: "center", mb: 4 }}>
        <Button size="medium" variant="contained" type="submit">
          Acompanhar pedido
        </Button>
      </CardActions>
    </Card>
  );
}
