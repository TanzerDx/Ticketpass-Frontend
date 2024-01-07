describe('Filter Concerts', () => {
  it('displays searchBar', () => {
    
    cy.visit(`http://localhost:5173`)
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-filter-input-keyword"]')
    .should('exist');

  });

  it('allows user to enter valid information and submit the form', () => {
    
    cy.visit(`http://localhost:5173`);
    cy.viewport(1920, 1080);

    cy.get('[data-testid="cypress-filter-input-keyword"]').type('kim');
    cy.get('[data-testid="cypress-filter-input-keyword"]').should('have.value', 'kim');

    cy.get('[data-testid="cypress-filter"]').submit();

    cy.wait(2000);

    cy.url().should('include', 'http://localhost:5173/concerts?keyword=kim');

  });

})