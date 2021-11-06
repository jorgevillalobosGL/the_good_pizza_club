/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('localhost:4200/home')
  })

  it('display home header', () => {
    cy.get('#home-section .home-header h1').contains('PIZZA?');
    cy.get('#home-section .home-header h2').contains('Gotcha!');
    cy.get('#home-section .home-header .customize-btn').should('be.visible');
  })

})