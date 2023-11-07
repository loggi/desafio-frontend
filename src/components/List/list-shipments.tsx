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
  Button,
  colors,
} from "@mui/material";
import { DeliveryStatus, Shipment } from "@/types/Shipment";

type ListProps = {
  shipments: Shipment[];
  onClick?: (item: Shipment) => void;
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

export const ShipmentList: React.FC<ListProps> = ({ shipments, onClick }) => {
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
            {onClick && <TableHeaderCell>Ver Mais</TableHeaderCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {shipments.map((shipment) => (
            <TableRow
              key={shipment.id}
              style={{
                backgroundColor:
                  shipment.status === DeliveryStatus.DELIVERED
                    ? colors.green[200]
                    : shipment.status === DeliveryStatus.IN_TRANSIT
                    ? colors.common.white
                    : colors.yellow[100],
              }}
            >
              <TableCell>{shipment.trackingNumber}</TableCell>
              <TableCell>{shipment.estimatedDeliveryDate}</TableCell>
              <TableCell>{shipment.status}</TableCell>
              <TableCell>{shipment.currentLocation}</TableCell>
              <TableCell>{shipment.destination}</TableCell>
              {onClick && (
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => onClick(shipment)}
                    data-testid={`btn-vermais-${shipment.trackingNumber}`}
                  >
                    Ver Mais
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
