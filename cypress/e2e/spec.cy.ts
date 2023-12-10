describe('Interaction Loggi Interface', () => {
  it('should navigate to the initial page', () => {
    // Start from the index page..
    cy.visit('http://localhost:3000/')
 
    // Clicking on the button without code tracker..
    cy.get('#goTracker').click()
 
    // Typing an valid code tracker
    cy.get('input').type('100200FGH') 

    // Trying tracker again
    cy.get('#goTracker').click()
 
  })
})