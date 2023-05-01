const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ensureScrolling, ignoreExceptions } = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  localStorage.clear();
  visit(LOGIN_URL, isTouchDevice);
  login();
  cy.wait(2000);
}

function checkContent(url, isTouchDevice) {
  visit(url, isTouchDevice);
  cy.wait(1500);
  cy.get('.section').should('be.visible');
  cy.get('.section-image-container').should('be.visible');
  cy.get('.home-link').should('be.visible');
  cy.scrollTo('bottom', { duration: 500 });
  ensureScrolling();
}

describe('[desktop] single product page', () => {
  const isTouchDevice = false;

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('mcdonalds -> event optimizer', () => checkContent(`${DOMAIN}/products/mcdonalds/event-optimizer`, isTouchDevice));

  it('mcdonalds -> design leadership', () => checkContent(`${DOMAIN}/products/mcdonalds/design-leadership`, isTouchDevice));

  it('havi -> landing', () => checkContent(`${DOMAIN}/products/havi/landing`, isTouchDevice));

  it('havi -> supply planning', () => checkContent(`${DOMAIN}/products/havi/supply-planning`, isTouchDevice));
});

describe('[small mobile] single product page', () => {
  const isTouchDevice = true;
  
  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('mcdonalds -> event optimizer', () => checkContent(`${DOMAIN}/products/mcdonalds/event-optimizer`, isTouchDevice));

  it('mcdonalds -> design leadership', () => checkContent(`${DOMAIN}/products/mcdonalds/design-leadership`, isTouchDevice));

  it('havi -> landing', () => checkContent(`${DOMAIN}/products/havi/landing`, isTouchDevice));

  it('havi -> supply planning', () => checkContent(`${DOMAIN}/products/havi/supply-planning`, isTouchDevice));
});
