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
})
