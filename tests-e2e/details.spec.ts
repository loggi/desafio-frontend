import { test, expect } from "@playwright/test";
import { PlayConfigPage } from "./play-config-page";

test.describe("Details Page", () => {
  let ConfigPage: PlayConfigPage;
  test.beforeEach(async ({ page }) => {
    ConfigPage = new PlayConfigPage(page);
    await ConfigPage.goto("/shipment/TRK123456789");
  });
  test("Open details page correctly", async ({ page }) => {
    await ConfigPage.appAssertion();
    await expect(
      page.getByRole("heading", { name: /acompanhe seu pacote/i })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: /rapido, fácil e intuitivo\. aqui voce encontra todos os detalhes do seu pacote!/i,
      })
    ).toBeVisible();

    await expect(page.getByTestId("child-step-Separando pacote")).toBeVisible();
    await expect(page.getByTestId("child-step-Em transito")).toBeVisible();
    await expect(
      page.getByTestId("child-step-Saindo para entrega")
    ).toBeVisible();
    await expect(page.getByTestId("child-step-Entregue")).toBeVisible();

    await expect(page.getByTestId("parent-step")).toBeVisible();
    await expect(page.getByTestId("shipment-table")).toBeVisible();
    await expect(page.getByTestId("package-table")).toBeVisible();
  });
});
