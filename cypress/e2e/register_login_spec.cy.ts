describe('Register', () => {
  it('register-login', () => {
    cy.visit('http://localhost:4200');

    cy.contains('Register').click();

    cy.url().should('include', '/register');

    cy.get("[name=username]")
    .type('Cypress user')
    .should('have.value', 'Cypress user')

    cy.get("[name=email]")
    .type('fake@mail.com')
    .should('have.value', 'fake@mail.com')

    cy.get("[name=password]")
    .type('123456')
    .should('have.value', '123456')

    cy.get("[name=Submit]").click();

    cy.wait(5000);

    cy.url().should('include', '/login');

    cy.get("[name=username]")
    .type('Cypress user')
    .should('have.value', 'Cypress user')

    cy.get("[name=password]")
    .type('123456')
    .should('have.value', '123456')

    cy.get("[name=Submit]").click();

    cy.wait(50000);

    cy.url().should('include', '/post');

    cy.get("[name=title]")
    .type('Cypress title')
    .should('have.value', 'Cypress title')

    cy.get("[name=content]")
    .type('Cypress making a post')
    .should('have.value', 'Cypress making a post')

    cy.get("[name=Submit]").click();
  })
})