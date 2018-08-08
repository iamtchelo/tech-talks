describe("Login no Novo Portal", () => {
  it("deve logar no novo portal", () => {
    cy.visit("https://beta.easynvest.com.br/autenticacao")
      .get('[name="username"]')
      .type("32908011875")
      .get('[name="password"]')
      .type(Cypress.env("MY_PASS"));

    cy.getByText("Entrar").click();

    cy.url().should('contains', '/acompanhar/investimentos')
  });
});
