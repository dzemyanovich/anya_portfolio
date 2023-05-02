const {
  DOMAIN, LOGIN_URL,
  visit, login, useSmallMobile, useBigTablet, useDesktop, scrolledTop, scrolledBottom, ignoreExceptions,
} = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  localStorage.clear();
  visit(LOGIN_URL, isTouchDevice);
  login();
  cy.wait(2000);
}

function checkPageWithTitle(url, isTouchDevice) {
  visit(url, isTouchDevice);

  cy.get('.page-title').should('be.visible');
  cy.get('.company-image').should('not.be.visible');
  cy.get('.company-info').should('not.be.visible');
  cy.get('.home-link').should('not.exist');
}

function checkPage(url, isTouchDevice) {
  visit(url, isTouchDevice);

  cy.get('.company-image').should('be.visible');
  cy.get('.company-info').should('be.visible');
  cy.get('.home-link').should('be.visible');
  scrolledTop();
  cy.scrollTo('bottom', { duration: 500 });
  cy.get('.home-link').should('not.exist');
  scrolledBottom();
}

describe('[desktop] multi products company', () => {
  const isTouchDevice = false;

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('check adidas products', () => checkPageWithTitle(`${DOMAIN}/products/adidas`, isTouchDevice));

  it('check mcdonalds products', () => checkPageWithTitle(`${DOMAIN}/products/mcdonalds`, isTouchDevice));

  it('check havi products', () => checkPageWithTitle(`${DOMAIN}/products/havi`, isTouchDevice));
});

describe('[touch desktop] multi products company', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('check adidas products', () => checkPage(`${DOMAIN}/products/adidas`, isTouchDevice));

  it('check mcdonalds products', () => checkPage(`${DOMAIN}/products/mcdonalds`, isTouchDevice));

  it('check havi products', () => checkPage(`${DOMAIN}/products/havi`, isTouchDevice));
});

describe('[big tablet] multi products company', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useBigTablet();
    beforeScript(isTouchDevice);
  });

  it('check adidas products', () => checkPage(`${DOMAIN}/products/adidas`, isTouchDevice));

  it('check mcdonalds products', () => checkPage(`${DOMAIN}/products/mcdonalds`, isTouchDevice));

  it('check havi products', () => checkPage(`${DOMAIN}/products/havi`, isTouchDevice));
});

describe('[small mobile] multi products company', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('check adidas products', () => checkPage(`${DOMAIN}/products/adidas`, isTouchDevice));

  it('check mcdonalds products', () => checkPage(`${DOMAIN}/products/mcdonalds`, isTouchDevice));

  it('check havi products', () => checkPage(`${DOMAIN}/products/havi`, isTouchDevice));
});
