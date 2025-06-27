describe('Custom Command: cy.createPost()', () => {
    it('creates a new post and stores ID in env', () => {
      cy.createPost()
  
      cy.then(() => {
        const postId = Cypress.env('createdPostId')
        expect(postId).to.be.a('number')
      })
    })
  })