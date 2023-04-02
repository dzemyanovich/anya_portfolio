const { DOMAIN, visit, useDesktop, useSmallMobile } = require('./shared');

function beforeAboutPage() {
  visit(`${DOMAIN}/about`);
}

describe('[desktop] about page', () => {
  beforeEach(() => {
    useDesktop();
    beforeAboutPage();
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

describe('[small mobile] about page', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeAboutPage();
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
