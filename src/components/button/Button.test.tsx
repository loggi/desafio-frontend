/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "./Button"

const mock = jest.fn()
const componentButtom = (size?: string) => (
  <Button onClick={mock} size={size}>
    My Button
  </Button>
)

it("Button: Render a component", () => {
  render(componentButtom())
  const buttonElement = screen.getByRole("button")

  expect(buttonElement).toBeInTheDocument()
})

it("Button: Render a component with small style", () => {
  render(componentButtom("small"))
  const buttonElement = screen.getByRole("button")

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveClass("button button--small")
})

it("Button: Render a component with large", () => {
  render(componentButtom("large"))
  const buttonElement = screen.getByRole("button")

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveClass("button button--large")
})

it("Button: Call a function when clicked", () => {
  render(componentButtom())
  const buttonElement = screen.getByRole("button")

  fireEvent.click(buttonElement)
  expect(mock).toHaveBeenCalled()
})
