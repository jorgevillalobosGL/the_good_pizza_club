/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('localhost:4200')
  })

  it('should exist', () => {
    cy.get('.footer').should('be.visible');
  })

  describe('our-info section', () => {
    it('should exist', () => {
      cy.get('.our-info').should('be.visible');
    })
    it('should content the logo', () => {
      cy.get('.logo').should('exist');
    })
    it('should content the media icons', () => {
      cy.get('.media-icons').should('exist');
    })
  })

  describe('our-links section', () => {
    it('should exist', () => {
      cy.get('.our-links').should('be.visible');
    })
    it('should content 4 links', () => {
      cy.get('.our-links > .list-group').find('li').should('have.length', 4);
    })
  })

  describe('stuff section', () => {
    it('should exist', () => {
      cy.get('.stuff').should('be.visible');
    })
    it('should content 3 links', () => {
      cy.get('.stuff > .list-group').find('li').should('have.length', 3);
    })
  })

  describe('our-feed section', () => {
    it('should exist', () => {
      cy.get('.our-feed').should('be.visible');
    })
    it('should display 6 food images', () => {
      cy.get('.our-feed > div').find('img').should('have.length', 6);
    })
  })
})