import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

beforeEach(() => render(<Header />));

describe("Should render Header Component", () => {
    
    it("Should render altText within Image Logo", async () => {
        const altTextByLogo = screen.getByAltText('Loggi');
        expect(altTextByLogo);
    });
  
    it("Should render navigation option inside Header component", async () => {
        const navigationMenu = screen.getByRole('navigation')
        expect(navigationMenu);
    });

    it("Should render button option for create new account", async () => {
        const createAccountButtonText = screen.getByText('Criar conta')
        expect(createAccountButtonText)
    });

});