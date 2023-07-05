const {
  DOMAIN,
  visit, useDesktop, useBigTablet, useSmallMobile, scrolledTop, scrolledBottom, ignoreExceptions,
} = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  visit(`${DOMAIN}/about`, isTouchDevice);
}

// applicable for tablet and mobile views
function checkAboutPage() {
  cy.get('.home-link').should('be.visible');
  cy.contains('Anna Pivunova', { matchCase: false });
  cy.contains('Lead Designer', { matchCase: false });
  cy.get('.about-name').should('be.visible');
  cy.get('.about-title').should('not.be.visible');
  cy.get('.about-image').should('be.visible');
  cy.get('.about-content').should('be.visible');
  cy.get('.contact-links').should('be.visible');
}

function scrolling() {
  cy.get('.home-link').should('be.visible');
  scrolledTop();
  cy.scrollTo('bottom', { duration: 500 });
  scrolledBottom();
  cy.get('.home-link').should('be.visible');
}

describe('[desktop] about page', () => {
  const isTouchDevice = false;

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('check about page', () => {
    cy.wait(2000);
    cy.get('.home-link').should('be.visible');
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Lead Designer', { matchCase: false });
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
    cy.get('.about-content').scrollTo('bottom', { duration: 500 });
    cy.get('.contact-links').should('be.visible');
  });
});

describe('[big tablet] about page', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useBigTablet();
    beforeScript(isTouchDevice);
  });

  it('check about page', () => checkAboutPage());

  it('scrolling', () => scrolling());
});

describe('[small mobile] about page', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('check about page', () => checkAboutPage());

  it('scrolling', () => scrolling());
});
