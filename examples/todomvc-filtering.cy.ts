/// <reference types="cypress"/>

describe('filtering', () => {
  beforeEach(() => {
    const secondToggle = '.todo-list li:nth-child(2) .toggle';
    cy.visit('https://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo', { timeout: 6000 }).type('Clean room{enter}');
    cy.get('.new-todo', { timeout: 6000 }).type('Learn JavaScript{enter}');
    cy.get('.new-todo', { timeout: 6000 }).type('Clean Cypress{enter}');

    cy.get(secondToggle).click();
  });

  it('should filter "Active" todos', () => {
    cy.contains('Active').click();
    cy.get()).should('have.length', 2);
  });

  it('should filter "Completed" todos', () => {
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('should filter "All" todos', () => {
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 3);
  });
});
