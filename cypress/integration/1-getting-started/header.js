/// <reference types="cypress" />

describe('Header', () => {
  beforeEach(() => {
    cy.visit('localhost:4200')
  })

  it('display desktop menu and logo', () => {
    cy.get('.desktop-menu').should('be.visible');
    cy.get('.mobile-menu').should('not.be.visible');
    cy.get('.main-nav > .logo').should('be.visible');
  })

  it('display desktop menu and logo', () => {
    cy.viewport('iphone-6');
    cy.get('.desktop-menu').should('not.be.visible');
    cy.get('.mobile-menu').should('be.visible');
    cy.get('.main-nav > .logo').should('not.be.visible');
  })
})