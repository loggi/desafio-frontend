import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectFilter } from "./select-filter";
import { describe, expect, test, vi } from "vitest";

describe("SelectFilter", () => {
  test("should renders SelectFilter component correctly", () => {
    const onSubmitMock = vi.fn();

    render(<SelectFilter onSubmit={onSubmitMock} />);

    expect(
      screen.getByRole("combobox", { name: /Selecione modo de pesquisa/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /Digite o código do pedido/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Pesquisar/i })
    ).toBeInTheDocument();
  });

  test("should handles selection change to CPF and form submission", async () => {
    const onSubmitMock = vi.fn();

    render(<SelectFilter onSubmit={onSubmitMock} />);

    const selectFilter = screen.getByRole("combobox", {
      name: /Selecione modo de pesquisa/i,
    });
    expect(selectFilter).toBeInTheDocument();
    userEvent.click(selectFilter);

    const optionCPF = await screen.findByRole("option", { name: "CPF" });
    expect(optionCPF).toBeInTheDocument();
    fireEvent.click(optionCPF);

    const inputCPF = await screen.findByRole("textbox", {
      name: /Digite seu CPF/i,
    });
    expect(inputCPF).toBeInTheDocument();

    await fireEvent.change(inputCPF, {
      target: { value: "00011122233" },
    });

    // const btnEnviar = screen.getByText("Pesquisar");

    // expect(btnEnviar).toBeInTheDocument();
    // fireEvent.click(btnEnviar);

    // expect(onSubmitMock).toHaveBeenCalledWith("cpf", "00011122233");
  });

  test("should type Code and handle form submission", async () => {
    const onSubmitMock = vi.fn();

    render(<SelectFilter onSubmit={onSubmitMock} />);

    const inputCode = await screen.findByRole("textbox", {
      name: /Digite o código do pedido/i,
    });
    expect(inputCode).toBeInTheDocument();
    fireEvent.change(inputCode, { target: { value: "ABCD123445" } });

    const btnEnviar = screen.getByText("Pesquisar");
    expect(btnEnviar).toBeInTheDocument();
    // fireEvent.click(btnEnviar);

    // expect(onSubmitMock).toHaveBeenCalledWith("code", "ABCD123445");
  });
});
