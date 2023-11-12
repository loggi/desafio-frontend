/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import fetchMock from "jest-fetch-mock"
import "@testing-library/jest-dom"
import { trackList } from "../../../data/trackList"
import Tracking from "./page"

fetchMock.enableMocks()

it("Tracking Home: render with a track code valid", async () => {
  fetchMock.mockResponseOnce(JSON.stringify(trackList[0]))

  const RenderTrackingPage = await Tracking({
    params: { code: "TBR046920318" },
  })
  render(RenderTrackingPage)

  const dataListComponent = await screen.getByText(
    /Seu pedido foi encaminhado para a transportadora/i
  )
  expect(dataListComponent).toBeInTheDocument()
})

it("Tracking Home: render without a code invalid", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      message: "Nenhum pedido encontrado para esse código.",
    })
  )

  const RenderTrackingPage = await Tracking({
    params: { code: "TBR999999999" },
  })

  render(RenderTrackingPage)

  const headingText = screen.getByRole("heading", { level: 3 })

  expect(headingText).toHaveTextContent(
    /nenhum pedido encontrado para esse código./i
  )
})
