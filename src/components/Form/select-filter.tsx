"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type TSelectFilter = {
  onSubmit: (filterType: string, inputValue: string) => void;
};

export function SelectFilter({ onSubmit }: TSelectFilter) {
  const [filter, setSelectFilter] = useState("code");
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue("");
    setSelectFilter(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Box marginBottom={2}>
        <InputLabel id="demo-simple-select-label">
          Selecione modo de pesquisa
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Selecione modo de pesquisa"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={"cpf"}>CPF</MenuItem>
          <MenuItem value={"code"}>Code</MenuItem>
        </Select>
      </Box>
      {filter === "code" ? (
        <Box marginBottom={2}>
          <TextField
            id="outlined-basic"
            label="Digite o código do pedido"
            variant="outlined"
            fullWidth
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
        </Box>
      ) : (
        <Box marginBottom={2}>
          <TextField
            id="outlined-basic"
            label="Digite seu CPF"
            variant="outlined"
            fullWidth
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
        </Box>
      )}

      <Box>
        <Button
          disabled={filter === "cpf" ? value.length < 11 : value.length < 5}
          variant="contained"
          color="primary"
          onClick={() => onSubmit(filter, value)}
        >
          Pesquisar
        </Button>
      </Box>
    </FormControl>
  );
}
