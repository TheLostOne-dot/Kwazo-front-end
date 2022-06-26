describe('empty spec', () => {
  it('make-pos', () => {
    cy.visit('http://localhost:4200/post');

    cy.get("[name=title]")
    .type('Cypress title')
    .should('have.value', 'Cypress title')

    cy.get("[name=content]")
    .type('Cypress making a post')
    .should('have.value', 'Cypress making a post')

    cy.get("[name=Submit]").click();
  })
})