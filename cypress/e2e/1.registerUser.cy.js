describe("User Registration Page", () => {
  describe("Successful Registration", () => {
    beforeEach(() => {
      cy.visit(`http://localhost:5173/signup`);
      cy.viewport(1920, 1080);

      cy.get('[data-testid="cypress-registerUser-email"]')
        .should("exist")
        .should("have.text", "EMAIL ADDRESS:");

      cy.get('[data-testid="cypress-registerUser-password"]')
        .should("exist")
        .should("have.text", "PASSWORD:");

      cy.get('[data-testid="cypress-registerUser-confirmPassword"]')
        .should("exist")
        .should("have.text", "CONFIRM PASSWORD:");

      cy.get('[data-testid="cypress-registerUser-input-email"]').type(
        "fake@email.com"
      );
      cy.get('[data-testid="cypress-registerUser-input-email"]').should(
        "have.value",
        "fake@email.com"
      );

      cy.get('[data-testid="cypress-registerUser-input-password"]').type(
        "secretPassword"
      );
      cy.get('[data-testid="cypress-registerUser-input-password"]').should(
        "have.value",
        "secretPassword"
      );

      cy.get('[data-testid="cypress-registerUser-input-confirmPassword"]').type(
        "secretPassword"
      );
      cy.get(
        '[data-testid="cypress-registerUser-input-confirmPassword"]'
      ).should("have.value", "secretPassword");

      cy.get('[data-testid="cypress-registerUser-form"]').submit();

      cy.wait(2000);
    });

    it("successfully creates an account on the platform and redirects to Sign In page", () => {
      cy.url().should("include", "http://localhost:5173/signin");

      cy.get('[data-testid="cypress-loginUser-email"]')
        .should("exist")
        .should("have.text", "EMAIL ADDRESS:");

      cy.get('[data-testid="cypress-loginUser-password"]')
        .should("exist")
        .should("have.text", "PASSWORD:");
    });
  });

  describe("Unsuccessful Registration", () => {
    beforeEach(() => {
      cy.visit(`http://localhost:5173/signup`);
      cy.viewport(1920, 1080);

      cy.get('[data-testid="cypress-registerUser-email"]')
        .should("exist")
        .should("have.text", "EMAIL ADDRESS:");

      cy.get('[data-testid="cypress-registerUser-password"]')
        .should("exist")
        .should("have.text", "PASSWORD:");

      cy.get('[data-testid="cypress-registerUser-confirmPassword"]')
        .should("exist")
        .should("have.text", "CONFIRM PASSWORD:");

      cy.get('[data-testid="cypress-registerUser-input-email"]').type(
        "fake@email.com"
      );
      cy.get('[data-testid="cypress-registerUser-input-email"]').should(
        "have.value",
        "fake@email.com"
      );

      cy.get('[data-testid="cypress-registerUser-input-password"]').type(
        "secretPassword"
      );
      cy.get('[data-testid="cypress-registerUser-input-password"]').should(
        "have.value",
        "secretPassword"
      );

      cy.get('[data-testid="cypress-registerUser-input-confirmPassword"]').type(
        "secretPassword"
      );
      cy.get(
        '[data-testid="cypress-registerUser-input-confirmPassword"]'
      ).should("have.value", "secretPassword");

      cy.get('[data-testid="cypress-registerUser-form"]').submit();

      cy.wait(2000);
    });

    it("throws an error since the email is already taken", () => {
      cy.url().should("include", "http://localhost:5173/signup");

      cy.get(".cypress-toastify-error-registration").should(
        "contain",
        "Email is already taken"
      );
    });
  });
});
