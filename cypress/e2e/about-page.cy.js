const { DOMAIN, visit, useDesktop, useBigTablet, useSmallMobile } = require('./shared');

function beforeScript() {
  visit(`${DOMAIN}/about`);
}

function checkAboutPage() {
  cy.get('.home-link').should('be.visible');
  cy.contains('Anna Pivunova', { matchCase: false });
  cy.contains('Principal Designer', { matchCase: false });
  cy.get('.about-name').should('be.visible');
  cy.get('.about-title').should('not.be.visible');
  cy.get('.about-image').should('be.visible');
  cy.get('.about-content').should('be.visible');
  cy.get('.contact-links').should('be.visible');
}

function scrolling() {
  cy.get('.home-link').should('be.visible');
  cy.wait(500);
  cy.scrollTo('bottom', { duration: 500 });
  cy.get('.home-link').should('be.visible');
}

describe('[desktop] about page', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('check about page', () => {
    cy.wait(2000);
    cy.get('.home-link').should('be.visible');
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Principal Designer', { matchCase: false });
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
    cy.get('.about-content').scrollTo('bottom', { duration: 500 });
    cy.get('.contact-links').should('be.visible');
  });
});

describe('[big tablet] about page', () => {
  beforeEach(() => {
    useBigTablet();
    beforeScript();
  });

  it('check about page', () => checkAboutPage());

  it('scrolling', () => scrolling());
});

describe('[small mobile] about page', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check about page', () => checkAboutPage());

  it('scrolling', () => scrolling());
});
