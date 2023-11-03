import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Form from ".";
import { fetchOrders } from "../../app/http";

const mockCallBack = jest.fn();

jest.mock("../../app/http");

describe("tracking page", () => {
  afterEach(() => cleanup());

  it("renders the tracking form", () => {
    const { queryByPlaceholderText } = render(
      <Form handleSubmitCallback={mockCallBack} />
    );

    expect(queryByPlaceholderText(/número do pedido/i)).toBeInTheDocument();
  });

  it("when clicking the submit button, and the user did not type the order number, show a message error", () => {
    const { getByText } = render(<Form handleSubmitCallback={mockCallBack} />);
    const btnSubmit = getByText(/buscar/i);

    fireEvent.click(btnSubmit);

    expect(
      getByText(/Digite um número de pedido válido./i)
    ).toBeInTheDocument();
  });
});
