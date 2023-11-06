import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  colors,
} from "@mui/material";
import { Shipment } from "@/types/Shipment";

type ListProps = {
  shipments: Shipment[];
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

export const ShipmentList: React.FC<ListProps> = ({ shipments }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{
          backgroundColor: colors.blue[600],
        }}
      >
        <TableHead>
          <TableRow>
            <TableHeaderCell>Código Rastreio</TableHeaderCell>
            <TableHeaderCell>Data Entrega</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Localizaçao</TableHeaderCell>
            <TableHeaderCell>Destino</TableHeaderCell>
            <TableHeaderCell>Ver Mais</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shipments.map((shipment) => (
            <TableRow
              key={shipment.id}
              style={{
                backgroundColor:
                  shipment.status === "Delivered"
                    ? colors.green[50]
                    : shipment.status === "In Transit"
                    ? colors.grey[50]
                    : colors.red[50],
              }}
            >
              <TableCell>{shipment.trackingNumber}</TableCell>
              <TableCell>{shipment.estimatedDeliveryDate}</TableCell>
              <TableCell>{shipment.status}</TableCell>
              <TableCell>{shipment.currentLocation}</TableCell>
              <TableCell>{shipment.destination}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary">
                  Ver Mais
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
