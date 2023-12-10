import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("Should render Not Fount Message Component", () => {
    
    it("Should render alert with some error message", async () => {
        render(<NotFound />)

        const alertNotFoundInformationRole = screen.getByRole('alert', { hidden: true });
        const alertNotFoundInformationId = screen.getByTestId('ErrorOutlineIcon')

        expect(alertNotFoundInformationRole);
        expect(alertNotFoundInformationId);
    });

});