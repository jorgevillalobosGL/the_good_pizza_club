/// <reference types="cypress" />

describe('Checkout', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('localhost:4200/checkout')
  })

  it('display checkout header', () => {
    cy.get('#checkout-section .checkout-header h1').contains('WE’RE FAST!');
    cy.get('#checkout-section .checkout-header h2').contains('Well, sorta.');
  })

  it('Order tab should display Order body', () => {
    cy.get('#checkout-section .tab-container > .nav > .nav-item:nth-child(1) > .nav-link > span').click();
    cy.get('#checkout-section #order-tab-body').should('be.visible');
  })
})

