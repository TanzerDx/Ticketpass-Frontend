// describe('Purchase Concert Tickets', () => {

//   it('allows user to log in, select a concert, and purchase tickets', () => {
    
//     // Log In
//     cy.visit(`http://localhost:5173/signin`)
//     cy.viewport(1920, 1080);

//     cy.get('[data-testid="cypress-loginUser-input-email"]').type('fake@email.com')
//     cy.get('[data-testid="cypress-loginUser-input-email"]').should('have.value', 'fake@email.com')
    
//     cy.get('[data-testid="cypress-loginUser-input-password"]').type('secretPassword')
//     cy.get('[data-testid="cypress-loginUser-input-password"]').should('have.value', 'secretPassword')

//     cy.get('[data-testid="cypress-loginUser-form"]').submit();

//     cy.wait(2000);

//     cy.url().should('include', 'http://localhost:5173/orders');


//     // Select a Concert
//     cy.get('[data-testid="cypress-goToConcerts-button"]').click();

//     cy.get('[data-testid="cypress-selectConcert-form"]').first().click({ force: true });
//     cy.url().should('include', 'http://localhost:5173/concert?id=1');

//     cy.get('[data-testid="cypress-buyTickets-form"]').click();
//     cy.url().should('include', 'http://localhost:5173/checkout');


//     // Fill in Form and Purchase Tickets

//     cy.get('[data-testid="cypress-checkout-input-name"]').type('Name')
//     cy.get('[data-testid="cypress-checkout-input-name"]').should('have.value', 'Name')

//     cy.get('[data-testid="cypress-checkout-input-surname"]').type('Surname')
//     cy.get('[data-testid="cypress-checkout-input-surname"]').should('have.value', 'Surname')

//     cy.get('[data-testid="cypress-checkout-input-address"]').type('Rachelsmolen 1')
//     cy.get('[data-testid="cypress-checkout-input-address"]').should('have.value', 'Rachelsmolen 1')

//     cy.get('[data-testid="cypress-checkout-input-phoneNumber"]').type('+31612345678')
//     cy.get('[data-testid="cypress-checkout-input-phoneNumber"]').should('have.value', '+31612345678')

//     cy.get('[data-testid="cypress-checkout-input-paymentMethod"]').click();

//     cy.get('[data-testid="cypress-checkout-input-checkbox"]').click();


//     cy.get('[data-testid="cypress-checkout-form"]').submit();
//     cy.url().should('include', 'http://localhost:5173/thankyou');


//     // Go to your tickets
//     cy.get('[data-testid="cypress-thankyou-button"]').click();
//     cy.url().should('include', 'http://localhost:5173/tickets');

//   });

// })

describe('Purchase Concert Tickets', () => {

  beforeEach(() => {

     // Log In
     cy.visit(`http://localhost:5173/signin`)
     cy.viewport(1920, 1080);
 
     cy.get('[data-testid="cypress-loginUser-input-email"]').type('fake@email.com')
     cy.get('[data-testid="cypress-loginUser-input-email"]').should('have.value', 'fake@email.com')
     
     cy.get('[data-testid="cypress-loginUser-input-password"]').type('secretPassword')
     cy.get('[data-testid="cypress-loginUser-input-password"]').should('have.value', 'secretPassword')
 
     cy.get('[data-testid="cypress-loginUser-form"]').submit();
 
     cy.wait(2000);
 
     cy.url().should('include', 'http://localhost:5173/orders');
 
 
     // Select a Concert
     cy.get('[data-testid="cypress-goToConcerts-button"]').click();
 
     cy.get('[data-testid="cypress-selectConcert-form"]').first().click({ force: true });
     cy.url().should('include', 'http://localhost:5173/concert?id=1');
 
     cy.get('[data-testid="cypress-buyTickets-form"]').click();
     cy.url().should('include', 'http://localhost:5173/checkout');
 
 
     // Fill in Form and Purchase Tickets
 
     cy.get('[data-testid="cypress-checkout-input-name"]').type('Name')
     cy.get('[data-testid="cypress-checkout-input-name"]').should('have.value', 'Name')
 
     cy.get('[data-testid="cypress-checkout-input-surname"]').type('Surname')
     cy.get('[data-testid="cypress-checkout-input-surname"]').should('have.value', 'Surname')
 
     cy.get('[data-testid="cypress-checkout-input-address"]').type('Rachelsmolen 1')
     cy.get('[data-testid="cypress-checkout-input-address"]').should('have.value', 'Rachelsmolen 1')
 
     cy.get('[data-testid="cypress-checkout-input-phoneNumber"]').type('+31612345678')
     cy.get('[data-testid="cypress-checkout-input-phoneNumber"]').should('have.value', '+31612345678')
 
     cy.get('[data-testid="cypress-checkout-input-paymentMethod"]').click();
 
     cy.get('[data-testid="cypress-checkout-input-checkbox"]').click();
 
 
     cy.get('[data-testid="cypress-checkout-form"]').submit();
     cy.url().should('include', 'http://localhost:5173/thankyou');
 
 
     // Go to your tickets
     cy.get('[data-testid="cypress-thankyou-button"]').click();

  })

  it('allows user to log in, select a concert, and purchase tickets', () => {
    
    cy.url().should('include', 'http://localhost:5173/tickets');

    cy.get('[data-testid="cypress-ticket-object"]')
    .should('exist');

    cy.get('[data-testid="cypress-ticket-artistName"]')
    .should('exist')
    .should('have.text' , 'Taylor Swift');

    cy.get('[data-testid="cypress-ticket-id"]')
    .should('exist');

    cy.get('[data-testid="cypress-ticket-name"]')
    .should('exist')
    .should('have.text' , 'NAME: Name Surname');

    cy.get('[data-testid="cypress-ticket-section"]')
    .should('exist')
    .should('have.text' , 'SECTION: Standing');

  });

})