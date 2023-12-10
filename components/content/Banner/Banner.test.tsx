import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

beforeEach(() => render(<Banner />));

describe("Should render Banner Search Component", () => {
    
    it("Should render input to get code tracker", async () => {
        const getInputCodeTracker = screen.getByRole('textbox');
        expect(getInputCodeTracker)
    });
    
    it("Should render the button of tracker package", async () => {
        const goTrackerButton = screen.getByRole('button');
        expect(goTrackerButton).toHaveTextContent('Acompanhar pedido');
    });

    it("Should be invalid input if hasn't value", async () => {
        const goTrackerButtonFired = screen.getByRole('button');
        
        fireEvent.click(goTrackerButtonFired)
        expect(screen.getByText('Precisamos do código de rastreamento.'));
        
    });

  
});