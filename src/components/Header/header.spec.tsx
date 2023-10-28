import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Header } from "@/components/Header";
import { authLinks, menuLinks } from "@/_mock/menu.json";

describe("Header component", () => {
  it("should render elements correctly", () => {
    render(<Header />);

    const logoLoggi = screen.getByRole("img", { name: /logo loggi/i });

    expect(logoLoggi).toBeInTheDocument();

    menuLinks.forEach((menu) => {
      const menuItem = screen.getByRole("link", {
        name: new RegExp(menu.title, "i"),
      });

      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveAttribute("href", menu.slug);
    });

    authLinks.forEach((menu) => {
      const menuItem = screen.getByRole("link", {
        name: new RegExp(menu.title, "i"),
      });

      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveAttribute("href", menu.slug);
    });
  });

  it("should render drawer menu correctly", async () => {
    render(<Header />);

    await waitFor(() => {
      window.resizeTo(360, 640);
    });

    const openMenuButton = screen.getByRole("button", { name: /open menu/i });

    fireEvent.click(openMenuButton);

    expect(screen.getByTestId("drawer-component")).toBeInTheDocument();
  });
});
