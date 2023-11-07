"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  colors,
} from "@mui/material";
import { Package } from "@/types/Shipment";

type ListProps = {
  packages: Package[];
};

const TableHeaderCell = ({ children }: { children: React.ReactNode }) => (
  <TableCell
    style={{
      color: colors.common.white,
    }}
  >
    {children}
  </TableCell>
);

export const PackageDetailsList: React.FC<ListProps> = ({ packages }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{
          backgroundColor: colors.blue[600],
        }}
      >
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nome Produto</TableHeaderCell>
            <TableHeaderCell>Descricao</TableHeaderCell>
            <TableHeaderCell>Quantidade</TableHeaderCell>
            <TableHeaderCell>Peso</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packages.map((pack) => (
            <TableRow
              key={pack.name}
              style={{
                backgroundColor: colors.common.white,
              }}
            >
              <TableCell>{pack.name}</TableCell>
              <TableCell>{pack.description}</TableCell>
              <TableCell>{pack.quantity}</TableCell>
              <TableCell>{pack.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
