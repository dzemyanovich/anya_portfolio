const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ensureScrolling, ignoreExceptions } = require('./shared');

function beforeScript() {
  ignoreExceptions();
  localStorage.clear();
  visit(LOGIN_URL);
  login();
  cy.wait(2000);
}

function checkContent(url) {
  visit(url);
  cy.wait(1500);
  cy.get('.section').should('be.visible');
  cy.get('.section-image-container').should('be.visible');
  cy.get('.home-link').should('be.visible');
  cy.scrollTo('bottom', { duration: 500 });
  ensureScrolling();
}

describe('[desktop] single product page', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('mcdonalds -> event optimizer', () => checkContent(`${DOMAIN}/products/mcdonalds/event-optimizer`));

  it('mcdonalds -> design leadership', () => checkContent(`${DOMAIN}/products/mcdonalds/design-leadership`));

  it('havi -> landing', () => checkContent(`${DOMAIN}/products/havi/landing`));

  it('havi -> supply planning', () => checkContent(`${DOMAIN}/products/havi/supply-planning`));
});

describe('[small mobile] single product page', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('mcdonalds -> event optimizer', () => checkContent(`${DOMAIN}/products/mcdonalds/event-optimizer`));

  it('mcdonalds -> design leadership', () => checkContent(`${DOMAIN}/products/mcdonalds/design-leadership`));

  it('havi -> landing', () => checkContent(`${DOMAIN}/products/havi/landing`));

  it('havi -> supply planning', () => checkContent(`${DOMAIN}/products/havi/supply-planning`));
});
