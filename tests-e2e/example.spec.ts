import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should open home and make a simple search", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.getByRole("button", { name: /Home/i })).toBeVisible();
    await expect(page.getByText(/Loggi/i)).toBeVisible();
    await expect(page.getByText(/rastreie seu pedido/i)).toBeVisible();
    await expect(
      page.getByText(
        "buscando mais facilidade? faça login e tenha tudo em um só lugar!"
      )
    ).toBeVisible();

    const combobox = page.getByRole("combobox", {
      name: /selecione modo de pesquisa/i,
    });
    await expect(combobox).toBeVisible();
    combobox.click();
    const optionCode = await page.getByRole("option", { name: /code/i });

    const optionCpf = await page.getByRole("option", { name: /CPF/i });
    await expect(optionCode).toBeVisible();
    await expect(optionCpf).toBeVisible();
    optionCpf.click();

    const inputCPF = await page.getByRole("textbox", {
      name: /digite seu cpf/i,
    });
    await inputCPF.fill("00011122233");
    await page.getByRole("button", { name: /pesquisar/i }).click();
    await expect(
      page.getByRole("columnheader", { name: /código rastreio/i })
    ).toBeVisible();
  });
});
