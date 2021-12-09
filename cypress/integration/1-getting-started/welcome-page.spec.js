/// <reference types="cypress" />

describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/auth/welcome')
  })

  it('should be visible', () => {
    cy.get('.welcome-section').should('be.visible');
  })

  it('should display Welcome title', () => {
    cy.get('.welcome-section > h2').contains('WELCOME!');
  })

  it('should display 2 buttons', () => {
    cy.get('.welcome-section .btn-login').should('be.visible');
    cy.get('.welcome-section .btn-sign-in').should('be.visible');
  })

  it('should not display News Letter Section in Welcome page', () => {
    cy.get('#newsSubscription').should('not.exist');
  });
})