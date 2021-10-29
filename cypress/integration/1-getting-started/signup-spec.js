/// <reference types="cypress" />

describe('Sign Up Page', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/auth/sign-up')
  })

  it('should be visible', () => {
    cy.get('.sign-section').should('be.visible');
  })

  it('should display sign title', () => {
    cy.get('.sign-section > h3').contains('Happy to have you!');
  })

  it('should display email input', () => {
    cy.get('.sign-section .input-icons .icon-mail').should('be.visible');
  })

  it('should display password input', () => {
    cy.get('.sign-section .input-icons .icon-lock').should('be.visible');
  })

  it('should display Sign Up button', () => {
    cy.get('.sign-section .btn-sign sb-icon-button').should('exist');
    cy.get('.sign-section .btn-sign sb-icon-button')
      .invoke('attr', 'type')
      .should('eq', 'success')

    cy.get('.sign-section .btn-sign sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'SIGN UP')
  })

  it('should display Sign Up with Google button', () => {
    cy.get('.sign-section .btn-google sb-icon-button').should('exist');

    cy.get('.sign-section .btn-google sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'SIGN UP WITH GOOGLE')
  })

  it('should display Sign Up with Facebook button', () => {
    cy.get('.sign-section .btn-facebook sb-icon-button').should('exist');

    cy.get('.sign-section .btn-facebook sb-icon-button')
      .invoke('attr', 'label')
      .should('eq', 'SIGN UP WITH FACEBOOK')
  })
})