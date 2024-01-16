// describe('User Login Page', () => {
//   it('displays login form with required naming fields', () => {
    
//     cy.visit(`http://localhost:5173/signin`)
//     cy.viewport(1920, 1080);

//     cy.get('[data-testid="cypress-loginUser-email"]')
//     .should('exist')
//     .should('have.text' , 'EMAIL ADDRESS:');

//     cy.get('[data-testid="cypress-loginUser-password"]')
//     .should('exist')
//     .should('have.text' , 'PASSWORD:');

//   });

//   it('allows user to enter valid information and submit the form', () => {
    
//     cy.visit(`http://localhost:5173/signin`)
//     cy.viewport(1920, 1080);

//     cy.get('[data-testid="cypress-loginUser-input-email"]').type('fake@email.com')
//     cy.get('[data-testid="cypress-loginUser-input-email"]').should('have.value', 'fake@email.com')
    
//     cy.get('[data-testid="cypress-loginUser-input-password"]').type('secretPassword')
//     cy.get('[data-testid="cypress-loginUser-input-password"]').should('have.value', 'secretPassword')

//     cy.get('[data-testid="cypress-loginUser-form"]').submit();

//     cy.wait(2000);

//     cy.url().should('include', 'http://localhost:5173/orders');

//   });

// })


describe('User Login Page', () => {

  beforeEach(() => {

    cy.visit(`http://localhost:5173/signin`)
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-loginUser-email"]')
    .should('exist')
    .should('have.text' , 'EMAIL ADDRESS:');

    cy.get('[data-testid="cypress-loginUser-password"]')
    .should('exist')
    .should('have.text' , 'PASSWORD:');

    cy.get('[data-testid="cypress-loginUser-input-email"]').type('fake@email.com')
    cy.get('[data-testid="cypress-loginUser-input-email"]').should('have.value', 'fake@email.com')
    
    cy.get('[data-testid="cypress-loginUser-input-password"]').type('secretPassword')
    cy.get('[data-testid="cypress-loginUser-input-password"]').should('have.value', 'secretPassword')

    cy.get('[data-testid="cypress-loginUser-form"]').submit();

    cy.wait(2000);

  })
 
  
  it('allows user to log in and be redirected to the my orders page', () => {

    cy.url().should('include', 'http://localhost:5173/orders');

    cy.get('[data-testid="cypress-orders-upcomingConcerts"]')
    .should('exist')
    .should('have.text' , 'UPCOMING CONCERTS');

  });

})

