import { expect, type Page } from "@playwright/test";

export class PlayConfigPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closePage() {
    await this.page.close();
  }

  async goto() {
    await this.page.goto("http://localhost:3000/");
  }

  async commonHomeAssertions() {
    await expect(
      this.page.getByRole("button", { name: /Home/i })
    ).toBeVisible();

    await expect(this.page.getByText(/Loggi/i)).toBeVisible();

    //image
    await expect(
      this.page.getByText(
        "buscando mais facilidade? faça login e tenha tudo em um só lugar!"
      )
    ).toBeVisible();
    await expect(
      this.page.getByRole("img", {
        name: /random image/i,
      })
    ).toBeVisible();

    //footer
    await expect(this.page.getByRole("contentinfo")).toBeVisible();
  }
}
