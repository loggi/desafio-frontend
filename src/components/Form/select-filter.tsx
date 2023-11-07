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
import { TextCpfComponent, TextCodeComponent } from "./custom-masked-input";

type TSelectFilter = {
  onSubmit: (filterType: string, inputValue: string) => void;
};

export function SelectFilter({ onSubmit }: TSelectFilter) {
  const [filter, setSelectFilter] = useState("code");
  const [value, setValue] = useState("");

  const formatValue = (value: string) => {
    if (filter === "cpf") {
      return value.replace(new RegExp(/[^a-z0-9]/gi), "");
    } else {
      return value.toUpperCase();
    }
  };

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
          <MenuItem value={"code"}>Código</MenuItem>
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
            onChange={(evt) => setValue(evt.target.value.toUpperCase())}
            InputProps={{ inputComponent: TextCodeComponent as any }}
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
            InputProps={{
              inputComponent: TextCpfComponent as any,
            }}
          />
        </Box>
      )}

      <Box>
        <Button
          disabled={filter === "cpf" ? value.length < 14 : value.length < 12}
          variant="contained"
          color="primary"
          onClick={() => onSubmit(filter, formatValue(value))}
        >
          Pesquisar
        </Button>
      </Box>
    </FormControl>
  );
}
