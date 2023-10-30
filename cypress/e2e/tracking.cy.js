describe("Traking", () => {
  it("Should render an error message when clicks in submit button without tracking code.", () => {
    cy.visit("http://localhost:3000/rastreador");

    cy.get('button[type="submit"]').click();

    cy.get(".Mui-error").should("contain", "Digite um código válido");
  });

  it("Should render an error message when send an invalid tracking code.", () => {
    cy.visit("http://localhost:3000/rastreador");

    cy.get('input[name="trackCode"]').type("BBBBBB");

    cy.get('button[type="submit"]').click();

    cy.wait(4000);

    cy.get(".Mui-error").should(
      "contain",
      "Não encontramos pedidos com esse código"
    );
  });

  it("Should navigate to tracking details when inserts a valid tracking code", () => {
    cy.visit("http://localhost:3000/rastreador");

    cy.get('input[name="trackCode"]').type("EFGH67890");

    cy.get('button[type="submit"]').click();

    cy.wait(4000);

    cy.url().should("eq", `http://localhost:3000/rastreador/789012/EFGH67890`);

    cy.wait(4000);

    cy.contains("Entregue").should("be.visible");
    cy.contains("O pacote chegou ao destino final.").should("be.visible");
    cy.contains("Código de rastreamento").should("be.visible");
    cy.contains("EFGH67890").should("be.visible");
  });
});
