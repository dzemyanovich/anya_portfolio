const { DOMAIN, LOGIN_URL, login, visit, useSmallMobile } = require('./shared');

function beforeScript() {
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

// todo: add more tests
// todo: tests work unstable
describe.skip('[small mobile] multi products company', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check adidas products', () => {
    const url = `${DOMAIN}/products/adidas`;
    checkCompanyProducts(url);
  });

  it('check mcdonalds products', () => {
    const url = `${DOMAIN}/products/mcdonalds`;
    checkCompanyProducts(url);
  });

  it('check havi products', () => {
    const url = `${DOMAIN}/products/havi`;
    checkCompanyProducts(url);
  });
});
