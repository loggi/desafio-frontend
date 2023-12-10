import { render, screen } from "@testing-library/react";
import { CardPromo } from "./Cards";

describe("Should render Card Promo Component", () => {
    
    it("Should render div reference with identification", async () => {
        render(<CardPromo />)
        
        const cardDivReference = screen.getByTestId('card-media')

        expect(cardDivReference)
    });

});