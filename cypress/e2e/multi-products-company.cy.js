const {
  DOMAIN, LOGIN_URL,
  visit, login, useSmallMobile, scrolledTop, scrolledBottom, ignoreExceptions,
} = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  localStorage.clear();
  visit(LOGIN_URL, isTouchDevice);
  login();
  cy.wait(2000);
}

function checkCompanyProducts(url, isTouchDevice) {
  visit(url, isTouchDevice);

  cy.wait(500);
  cy.get('.company-image').should('be.visible');
  cy.get('.company-info').should('be.visible');
  cy.get('.home-link').should('be.visible');
  scrolledTop();
  cy.scrollTo('bottom', { duration: 500 });
  cy.get('.home-link').should('not.exist');
  scrolledBottom();
}

describe('[small mobile] multi products company', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('check adidas products', () => checkCompanyProducts(`${DOMAIN}/products/adidas`, isTouchDevice));

  it('check mcdonalds products', () => checkCompanyProducts(`${DOMAIN}/products/mcdonalds`, isTouchDevice));

  it('check havi products', () => checkCompanyProducts(`${DOMAIN}/products/havi`, isTouchDevice));
});
