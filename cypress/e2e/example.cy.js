describe('Cypress example site', () => {
    it('should load and display the correct content', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('Kitchen Sink').should('be.visible')
    })
  })