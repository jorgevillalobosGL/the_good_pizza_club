/// <reference types="cypress" />

describe('Menu', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('localhost:4200/menu')
  })

  it('display menu header', () => {
    cy.get('#menu-section .menu-header h1').contains('OUR MOST BELOVED MENU');
  })

  it('display repertory section with pizza cards', () => {
    cy.get('#repertory-section h3').contains('Our repertoire');
    cy.get('#repertory-section .repertory-content').find('sb-pizza-menu-card').should('have.length', 8)
  })

  describe('Customize your Pizza Modal', () => {
    it('should display the modal', () => {
      cy.get('#menu-section .customize-btn').click();
      cy.get('#customize-pizza-form').should('exist');
    })
  })
})
