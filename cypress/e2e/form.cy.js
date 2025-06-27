describe('Form Interactions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('types into form inputs and submits', () => {
      cy.get('.action-email')
        .type('qa.engineer@example.com')
        .should('have.value', 'qa.engineer@example.com')
  
      cy.get('.action-form').submit()
    })
  
    it('checks checkboxes and selects dropdowns', () => {
      cy.get('.action-checkboxes [type="checkbox"]')
        .first()
        .check()
        .should('be.checked')
  
      cy.get('.action-select')
        .select('apples')
        .should('have.value', 'fr-apples') // <- this is the real value
    })
  })