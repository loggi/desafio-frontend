/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react"
import Home from "./page"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

it("Page Home: render a title", () => {
  render(<Home />)
  const headingText = screen.getByRole("heading", { level: 1 })
  expect(headingText).toHaveTextContent(/acompanhe com a Loggi/i)
})

it("Page Home: Render a page component with a input and button", async () => {
  render(<Home />)

  const inputElement = screen.getByPlaceholderText(/primeiro, /i)
  const buttonElement = screen.getByRole("button")

  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
})

it("Page Home: Render with a button is disabled", async () => {
  render(<Home />)

  const buttonElement = screen.getByRole("button")

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toBeDisabled()
})

it("Page Home: Type a invalid code and button is disabled", async () => {
  render(<Home />)

  const trackingCode = "046920318"

  const inputElement = screen.getByPlaceholderText(/primeiro, /i)
  const buttonElement = screen.getByRole("button")

  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()

  fireEvent.change(inputElement, { target: { value: trackingCode } })

  expect(inputElement).toHaveValue("046920318")
  expect(buttonElement).toBeDisabled()
})

it("Page Home: Type a valid code and button not is disabled", async () => {
  render(<Home />)

  const trackingCode = "TBR046920318"

  const inputElement = screen.getByPlaceholderText(/primeiro, /i)
  const buttonElement = screen.getByRole("button")

  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()

  fireEvent.change(inputElement, { target: { value: trackingCode } })

  expect(inputElement).toHaveValue("TBR046920318")
  expect(buttonElement).not.toBeDisabled()
})
