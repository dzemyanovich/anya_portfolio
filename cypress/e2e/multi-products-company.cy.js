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
describe('[small mobile] multi products company', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check content', () => {
    [
      `${DOMAIN}/products/adidas`,
      `${DOMAIN}/products/mcdonalds`,
      `${DOMAIN}/products/havi`,
    ].map(url => checkCompanyProducts(url));
  });
});
