/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import Home from "./page"

it("Page Home: render a title", () => {
  render(<Home />)
  expect(screen.getByRole("heading")).toHaveTextContent("Jaiminho")
})
