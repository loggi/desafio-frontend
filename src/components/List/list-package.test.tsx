import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { fakePackageData } from "@/mock";
import { PackageDetailsList } from "./list-package";

describe("List Package", () => {
  test("should render list package properly", () => {
    render(<PackageDetailsList packages={fakePackageData[0].items} />);

    expect(
      screen.getByRole("columnheader", { name: /Nome Produto/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Descricao/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Quantidade/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Peso/i })
    ).toBeInTheDocument();

    fakePackageData[0].items.map((item) => {
      expect(screen.getByRole("cell", { name: item.name })).toBeInTheDocument();

      expect(
        screen.getByRole("cell", { name: item.description })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("cell", { name: item.quantity })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("cell", { name: item.weight })
      ).toBeInTheDocument();
    });
  });
});
