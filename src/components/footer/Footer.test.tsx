/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

it("Footer: Render a Logo image", () => {
  render(<Footer />)
  const loggiLogo = screen.getByAltText(/logotipo loggi/i)
  expect(loggiLogo).toBeInTheDocument()
})
