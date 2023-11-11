/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import { AttainNewCustomers } from "./AttainNewCustomers"

it("AttainNewCustomers: Render a component", () => {
  render(<AttainNewCustomers />)
  const headingText = screen.getByRole("heading", { level: 2 })
  expect(headingText).toHaveTextContent(
    /A melhor solução para envio de encomendas no Brasil./i
  )
})
