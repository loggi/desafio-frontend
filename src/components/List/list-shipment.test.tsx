import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ShipmentList } from "./list-shipments";
import { fakePackageData } from "@/mock";

describe("Shipment List", () => {
  test("should render list correctly without Ver Mais Section", () => {
    render(<ShipmentList shipments={fakePackageData} />);
    expect(
      screen.queryByRole("columnheader", { name: /Ver Mais/i })
    ).not.toBeInTheDocument();
  });
  test("should render list correctly with Ver Mais Section", () => {
    render(<ShipmentList shipments={fakePackageData} onClick={() => {}} />);

    expect(
      screen.getByRole("columnheader", { name: /Código Rastreio/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Data Entrega/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Status/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Localizaçao/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Destino/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Ver Mais/i })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("cell", {
        name: fakePackageData[0].destination,
      })
    ).toHaveLength(5);

    expect(
      screen.getByRole("cell", { name: fakePackageData[0].status }).innerHTML
    ).toEqual("Entregue");

    expect(
      screen.getByRole("cell", { name: fakePackageData[1].status }).innerHTML
    ).toEqual("Em Transito");

    expect(
      screen.getByRole("cell", { name: fakePackageData[2].status }).innerHTML
    ).toEqual("Saiu para Entrega");

    fakePackageData.map((item) => {
      expect(
        screen.getByRole("cell", { name: item.trackingNumber })
      ).toBeInTheDocument();
    });
  });
});
