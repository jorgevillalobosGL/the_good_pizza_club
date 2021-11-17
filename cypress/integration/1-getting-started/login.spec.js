/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/auth/login')
  })

  it('should be visible', () => {
    cy.get('.login-section').should('be.visible');
  })

  it('should display login title', () => {
    cy.get('.login-section > h3').contains('Welcome back!');
  })

  it('should display email input', () => {
    cy.get('.login-section .input-icons  .icon-mail').should('be.visible');
  })

  it('should display password input', () => {
    cy.get('.login-section .input-icons .icon-lock').should('be.visible');
  })

  it('should display Log In button', () => {
    cy.get('.login-section .btn-login sb-icon-button').should('exist');
    cy.get('.login-section .btn-login sb-icon-button')
      .invoke('attr', 'type')
      .should('eq', 'success')

    cy.get('.login-section .btn-login sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'LOG IN')

  })

  it('should display Log In with Google button', () => {
    cy.get('.login-section .btn-google sb-icon-button').should('exist');

    cy.get('.login-section .btn-google sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'LOG IN WITH GOOGLE')
  })

  it('should display Log In with Facebook button', () => {
    cy.get('.login-section .btn-facebook sb-icon-button').should('exist');

    cy.get('.login-section .btn-facebook sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'LOG IN WITH FACEBOOK')
  })

  it('should not display News Letter Section in Login page', () => {
    cy.get('#newsSubscription').should('not.exist');
  });
})