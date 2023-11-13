describe('Home', () => {
  it('Renders the home page correctly', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.contains('Acompanhe com a Loggi a entrega do seu pedido')
  })
})
