import { render, screen, fireEvent } from "@testing-library/react"
import { Input } from "./Input"

const mock = jest.fn()

const componentInput = (
  <Input
    name="search"
    id="search"
    label="Código de rastreamento"
    placeholder="Primeiro, digite o código de rastreamento."
    onChange={mock}
  />
)

it("Input: Render a component", () => {
  render(componentInput)
  const labeElement = screen.getByLabelText("Código de rastreamento")
  const inputElement = screen.getByPlaceholderText(/primeiro, /i)

  expect(labeElement).toBeInTheDocument()
  expect(inputElement).toBeInTheDocument()
})

it("Input: Render a component and type a tracking code", async () => {
  render(componentInput)
  const trackingCode = "TBR046920318"

  const inputElement = screen.getByPlaceholderText(/primeiro, /i)
  expect(inputElement).toBeInTheDocument()

  fireEvent.change(inputElement, { target: { value: trackingCode } })

  expect(inputElement).toHaveValue("TBR046920318")
})
