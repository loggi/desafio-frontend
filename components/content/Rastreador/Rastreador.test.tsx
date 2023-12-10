import { render, screen } from "@testing-library/react";
import { Rastreador } from "./Rastreador";

const mockCode = "123456"
beforeEach(() => render(<Rastreador code={mockCode} />));

describe("Should render Tracker/Rastreador Component", () => {
    
    it("Should render if has title code reference", async () => {
        const toHaveHeadingPage = screen.getByRole('heading');
        expect(toHaveHeadingPage).toHaveTextContent(`CODE: ${mockCode}`)
    });
  
    it("Should render have to be sequence cards information", async () => {
        const sequenceCardsInformation = screen.getByTestId('cards-information')
        expect(sequenceCardsInformation);
    });


});