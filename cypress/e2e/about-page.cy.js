const { DOMAIN, visit, useDesktop, useBigTablet, useSmallMobile } = require('./shared');

describe('[desktop] about page', () => {
  beforeEach(() => {
    useDesktop();
    visit(`${DOMAIN}/about`);
  });

  it('check about page', () => {
    cy.get('.home-link').should('be.visible');
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Principal Designer', { matchCase: false });
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
    cy.get('.contact-links').should('be.visible');
  });
});

describe('[big tablet] about page', () => {
  beforeEach(() => {
    useBigTablet();
    visit(`${DOMAIN}/about`);
  });

  it('check about page', () => {
    cy.get('.home-link').should('be.visible');
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Principal Designer', { matchCase: false });
    cy.get('.about-name').should('be.visible');
    cy.get('.about-title').should('not.be.visible');
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
    cy.get('.contact-links').should('be.visible');
  });
});

describe.only('[small mobile] about page', () => {
  beforeEach(() => {
    useSmallMobile();
    visit(`${DOMAIN}/about`);
  });

  it('check about page', () => {
    cy.get('.home-link').should('be.visible');
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Principal Designer', { matchCase: false });
    cy.get('.about-name').should('be.visible');
    cy.get('.about-title').should('not.be.visible');
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
    cy.get('.contact-links').should('be.visible');
  });

  it('scrolling', () => {
    cy.get('.home-link').should('be.visible');
    // wait until animation is finished
    cy.wait(500);
    cy.scrollTo('bottom', { duration: 500 });
    cy.get('.home-link').should('be.visible');
  });
});
