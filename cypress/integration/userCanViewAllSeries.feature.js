describe("Visitor can see interface", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:viaplay_series.json",
    });
    cy.visit("http://localhost:3000")
  })

  it("lists the viaplay series", () => {
    cy.get("[data-cy='header']").should("be.visible")
    cy.get(".display-show").should("have.length", 10)
  });
})