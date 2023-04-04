const { DOMAIN, visit, useDesktop, useSmallMobile, ignoreExceptions } = require('./shared');

function beforeScript() {
  ignoreExceptions();
  visit(DOMAIN);
}

function checkHomePage() {
  cy.get('.designer-title').contains('principal designer', { matchCase: false });

  cy.get('.page-link').should('have.length', 4);
  cy.get('.designer-title').should('have.length', 1);
  cy.get('.pivunova-brand').should('have.length', 1);
}

describe('[desktop] home page', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('check home page', () => checkHomePage());

  it('click on products link', () => {
    cy.get('.products-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/products`);
    });
  });

  it('click on contact link', () => {
    cy.get('.contact-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/contact`);
    });
  });

  it('click on about link', () => {
    cy.get('.about-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/about`);
    });
  });
});

describe('[small mobile] home page', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check home page', () => checkHomePage());
});
