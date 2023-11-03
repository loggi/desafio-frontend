import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Main from ".";
import { fetchOrders } from "../../app/http";

const mockCallBack = jest.fn();

jest.mock("../../app/http");

describe("Main page", () => {
  afterEach(() => cleanup());

  it("renders the Main component correctly", () => {
    fetchOrders.mockImplementation(() => Promise.resolve());

    const { getByText } = render(<Main fetchOrders={fetchOrders} />);

    expect(getByText(/Rastreie seu pedido/i)).toBeInTheDocument();
  });

  it("when clicking the submit button with a non existing order number, should show a message alert", async () => {
    fetchOrders.mockImplementation(() =>
      Promise.reject(new Error("Failed to fetch data"))
    );

    const { queryByPlaceholderText, findByText, getByText } = render(
      <Main fetchOrders={fetchOrders} />
    );
    const inputText = queryByPlaceholderText(/número do pedido/i);
    const btnSubmit = getByText(/buscar/i);

    fireEvent.change(inputText, { target: { value: "1111111" } });

    fireEvent.click(btnSubmit);

    const noOrderFoundLabel = await findByText(/Pedido não encontrado/i);

    expect(noOrderFoundLabel).toBeInTheDocument();
  });
});
