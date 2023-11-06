describe('My Next.js App', () => {
  it('Visits the homepage', () => {
    cy.visit('/');
    cy.contains('test').should('be.visible');
  });
});
