/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react"
import mediaQuery from "css-mediaquery"
import { Header } from "./Header"

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }
  }
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width)
}

it("Header: Render a Logo image", () => {
  render(<Header />)
  const loggiLogo = screen.getByAltText(/Logotipo Loggi/)
  expect(loggiLogo).toBeInTheDocument()
})

it("Header: Render a Menu Button in small views", () => {
  resizeScreenSize(400)
  render(<Header />)
  const menuButton = screen.getByText(/menu/i)
  expect(menuButton).toBeInTheDocument()
})

it("Header: Click in Menu Button and open menu", () => {
  resizeScreenSize(400)
  render(<Header />)
  const navElement = screen.getByRole("navigation")
  const menuButton = screen.getByText(/menu/i)
  fireEvent.click(menuButton)

  expect(navElement).toHaveClass("nav nav--open")
})
