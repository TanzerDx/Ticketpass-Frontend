// describe('Filter Concerts', () => {
//   it('displays searchBar', () => {
    
//     cy.visit(`http://localhost:5173`)
//     cy.viewport(1920, 1080);

//     cy.get('[data-testid="cypress-filter-input-keyword"]')
//     .should('exist');

//   });

//   it('allows user to enter valid information and submit the form', () => {
    
//     cy.visit(`http://localhost:5173`);
//     cy.viewport(1920, 1080);

//     cy.get('[data-testid="cypress-filter-input-keyword"]').type('kim');
//     cy.get('[data-testid="cypress-filter-input-keyword"]').should('have.value', 'kim');

//     cy.get('[data-testid="cypress-filter"]').submit();

//     cy.wait(2000);

//     cy.url().should('include', 'http://localhost:5173/concerts?keyword=kim');

//   });

// })

describe('Filter Concerts', () => {
  beforeEach (() => {

    cy.visit(`http://localhost:5173`)
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-filter-input-keyword"]')
    .should('exist');

    cy.get('[data-testid="cypress-filter-input-keyword"]').type('kim');
    cy.get('[data-testid="cypress-filter-input-keyword"]').should('have.value', 'kim');

    cy.get('[data-testid="cypress-filter"]').submit();

    cy.wait(2000);

  })

  it('allows user to enter valid information and submit the form', () => {

    cy.url().should('include', 'http://localhost:5173/concerts?keyword=kim');

    cy.get('[data-testid="cypress-concertItem-object"]')
    .should('exist');

    cy.get('[data-testid="cypress-concertItem-artistName"]')
    .should('exist')
    .should('have.text' , 'Kim Petras');

    cy.get('[data-testid="cypress-concertItem-venue"]')
    .should('exist')
    .should('have.text' , 'Venue: AFAS Live');

    cy.get('[data-testid="cypress-concertItem-time"]')
    .should('exist')
    .should('have.text' , 'Time: 29-02-2024 20:00');

    cy.get('[data-testid="cypress-concertItem-location"]')
    .should('exist')
    .should('have.text' , 'Location: Amsterdam');

  });

})