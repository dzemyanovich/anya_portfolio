const { DOMAIN, LOGIN_URL, login, visit, useBigTablet, useSmallMobile } = require('./shared');

function beforeScript() {
  cy.once('uncaught:exception', () => false);
  localStorage.clear();
  visit(LOGIN_URL);
  login();
  cy.wait(2000);
}

function checkCompanyProducts(url) {
  visit(url);
  cy.wait(500);
  cy.get('.company-image').should('be.visible');
  cy.get('.company-info').should('be.visible');
  cy.get('.home-link').should('be.visible');
  cy.scrollTo('bottom', { duration: 500 });
  cy.get('.home-link').should('not.exist');
}

// todo: uskip
describe.skip('[big tablet] multi products company', () => {
  beforeEach(() => {
    useBigTablet();
    beforeScript();
  });

  it('// todo', () => {
    cy.get('.company-page').scrollTo('right', { duration: 500 });
  });
});

// todo: add more tests
// todo: add tests for touch devices
describe('[small mobile] multi products company', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check adidas products', () => checkCompanyProducts(`${DOMAIN}/products/adidas`));

  it('check mcdonalds products', () => checkCompanyProducts(`${DOMAIN}/products/mcdonalds`));

  it('check havi products', () => checkCompanyProducts(`${DOMAIN}/products/havi`));
});
