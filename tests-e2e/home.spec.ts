import { test, expect } from "@playwright/test";
import { PlayConfigPage } from "./play-config-page";

test.beforeAll(async () => {});
test.describe("Home Page", () => {
  test("should open home page properly ", async ({ page }) => {
    const ConfigPage = new PlayConfigPage(page);
    await ConfigPage.goto();
    await ConfigPage.commonHomeAssertions();
  });

  test("should open home and make a simple search by CPF", async ({ page }) => {
    //open site
    const ConfigPage = new PlayConfigPage(page);
    await ConfigPage.goto();

    //content
    await expect(page.getByText(/rastreie seu pedido/i)).toBeVisible();

    //form
    const combobox = page.getByRole("combobox", {
      name: /selecione modo de pesquisa/i,
    });
    await expect(combobox).toBeVisible();
    combobox.click(); //opening the combobox
    const optionCode = await page.getByRole("option", { name: /code/i });
    const optionCpf = await page.getByRole("option", { name: /CPF/i });
    await expect(optionCode).toBeVisible();
    await expect(optionCpf).toBeVisible();
    optionCpf.click(); // select cpf as filter

    const inputCPF = await page.getByRole("textbox", {
      name: /digite seu cpf/i,
    });

    await expect(
      page.getByRole("button", { name: /pesquisar/i })
    ).toBeDisabled(); // check if the button is disabled

    await inputCPF.fill("00011122233"); // change the textbox value

    await expect(
      page.getByRole("button", { name: /pesquisar/i })
    ).toBeEnabled(); // is not disabled after fill input

    await page.getByRole("button", { name: /pesquisar/i }).click(); // making a search

    //asserting table
    await expect(
      page.getByRole("columnheader", { name: /código rastreio/i })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: /data entrega/i })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: /status/i })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: /localizaçao/i })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: /destino/i })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: /ver mais/i })
    ).toBeVisible();

    const items = ["TRK987654321", "trk123456789", "TRK567890123"];
    items.forEach(async (item) => {
      await expect(page.getByRole("cell", { name: item })).toBeVisible();
    });

    const lastRowBtn = await page.getByTestId("btn-vermais-TRK567890123");
    await lastRowBtn.click(); //clicking in the last button

    await page.waitForURL("http://127.0.0.1:3000/shipment/TRK567890123"); //asserting the url changes
  });
});
