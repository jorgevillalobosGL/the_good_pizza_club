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

  it('display home pizza carousel', () => {
    cy.get('#pizza-carousel-section h3').contains('You can also try one of our greatest hits');
    cy.get('#pizza-carousel-section carousel').should('be.visible');
  })

  it('carousel controls should work', () => {
    cy.get('#pizza-carousel-section .slide-0').should('be.visible');
    cy.get('#pizza-carousel-section .slide-1').should('not.be.visible');
    cy.get('#pizza-carousel-section .slide-2').should('not.be.visible');
    cy.get('#pizza-carousel-section .carousel .right').click();
    cy.get('#pizza-carousel-section .slide-0').should('not.be.visible');
    cy.get('#pizza-carousel-section .slide-1').should('be.visible');
    cy.get('#pizza-carousel-section .slide-2').should('not.be.visible');

  })

  describe('Customize your Pizza Modal', () => {
    it('should display the modal', () => {
      cy.get('#home-section .home-header .customize-btn').click();
      cy.get('#customize-pizza-form').should('exist');
    })
  })
})
