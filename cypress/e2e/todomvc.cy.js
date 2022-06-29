/// <reference types="cypress"/>

describe("Learning Cypress", () => {
  it("should be able to add a new todo to the list", () => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo", { timeout: 6000 }).type("Clean room{enter}");

    cy.get("label").should("have.text", "Clean room");

    cy.get(".toggle").should("not.be.checked");

    // cy.get(".toggle").click();

    // cy.contains("Clear completed").click();
  });
});
