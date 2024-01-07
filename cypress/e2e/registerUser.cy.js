describe('User Registration Page', () => {
  it('displays registration form with required naming fields', () => {
    
    cy.visit(`http://localhost:5173/signup`)
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-registerUser-email"]')
    .should('exist')
    .should('have.text' , 'EMAIL ADDRESS:');

    cy.get('[data-testid="cypress-registerUser-password"]')
    .should('exist')
    .should('have.text' , 'PASSWORD:');

    cy.get('[data-testid="cypress-registerUser-confirmPassword"]')
    .should('exist')
    .should('have.text' , 'CONFIRM PASSWORD:');

  });

  it('allows user to enter valid information and submit the form', () => {
    
    cy.visit(`http://localhost:5173/signup`)
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-registerUser-input-email"]').type('fake@email.com')
    cy.get('[data-testid="cypress-registerUser-input-email"]').should('have.value', 'fake@email.com')
    
    cy.get('[data-testid="cypress-registerUser-input-password"]').type('secretPassword')
    cy.get('[data-testid="cypress-registerUser-input-password"]').should('have.value', 'secretPassword')
    
    cy.get('[data-testid="cypress-registerUser-input-confirmPassword"]').type('secretPassword')
    cy.get('[data-testid="cypress-registerUser-input-confirmPassword"]').should('have.value', 'secretPassword')

    cy.get('[data-testid="cypress-registerUser-form"]').submit();

    cy.wait(2000);

    cy.url().should('include', 'http://localhost:5173/signin');

  });

})