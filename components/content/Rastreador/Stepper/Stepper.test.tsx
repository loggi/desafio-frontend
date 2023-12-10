import { render, screen } from "@testing-library/react";
import { VerticalLinearStepper } from "./Stepper";

const mockStatus = [
    {
        label: 'Lorem Ipsum',
        description: 'Lorem Ipsum Dolor Statement'
    }
]

//@ts-ignore
beforeEach(() => render(<VerticalLinearStepper status={mockStatus} />));

describe("Should render Stepper Component", () => {
    
    it("Should render stepper status title", async () => {
        const toHaveHeadingPage = screen.getByRole('heading');
        expect(toHaveHeadingPage).toHaveTextContent('Package status')
    });
  
    it("Should render have to be sequence stepper information", async () => {
        const sequenceCardsInformation = screen.getByTestId('stepper')
        expect(sequenceCardsInformation);
    });

});