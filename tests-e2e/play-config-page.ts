import { expect, type Page } from "@playwright/test";

export class PlayConfigPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("http://127.0.0.1:3000");
  }

  async commonHomeAssertions() {
    await expect(
      this.page.getByRole("button", { name: /Home/i })
    ).toBeVisible();
    await expect(this.page.getByText(/Loggi/i)).toBeVisible();

    //image
    const imageDescription = await this.page.getByText(
      "buscando mais facilidade? faça login e tenha tudo em um só lugar!"
    );
    const image = await this.page.getByRole("img", {
      name: /random image/i,
    });
    expect(imageDescription).toBeVisible();
    expect(image).toBeVisible();

    //footer
    await expect(this.page.getByRole("contentinfo")).toBeVisible();
  }
}
