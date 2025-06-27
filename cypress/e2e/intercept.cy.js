describe('API Intercept Showcase', () => {
    beforeEach(() => {
      cy.visit('https://jsonplaceholder.typicode.com/')
    })
  
    it('intercepts posts and stubs them', () => {
      cy.intercept('GET', '**/posts', {
        statusCode: 200,
        body: [
          { id: 1, title: 'Cypress Rocks 🔥' },
          { id: 2, title: 'Intercepted Successfully 🎯' }
        ]
      }).as('getPosts')
  
    })
  })