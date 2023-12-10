import { render, screen } from "@testing-library/react";
import { LoadingMessage } from "./Loading";

describe("Should render Loading Message Component", () => {
    
    it("Should render alert with some loading message", async () => {
        render(<LoadingMessage />)

        const alertLoadingMessageRole = screen.getByRole('alert', { hidden: true });
        const alertNotFoundInformationId = screen.getByTestId('InfoOutlinedIcon')
        
        expect(alertLoadingMessageRole);
        expect(alertNotFoundInformationId)
    });

});