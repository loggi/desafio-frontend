describe('Teste da home', () => {
  it('Entrar no site', () => {
    cy.visit('http://localhost:3000');
  })

  it('Valida a label do input', () => {
    cy.visit('http://localhost:3000');
    cy.get("#outlined-required-label").should("contain.text", "Código de rastreamento");
  })

  it('Verifica texto do botão', () => {
    cy.visit('http://localhost:3000');
    cy.get("[type='submit']").should("contain.text", "Acompanhar pedidos");
  })
})


