const { DOMAIN, LOGIN_URL, login, visit, useSmallMobile, ensureScrolling, ignoreExceptions } = require('./shared');

function beforeScript() {
  ignoreExceptions();
  localStorage.clear();
  visit(LOGIN_URL);
  login();
  cy.wait(2000);
}

function checkCompanyProducts(url, isTouchDevice) {
  if (isTouchDevice) {
    cy.visit(url, {
      onBeforeLoad(win) {
        // todo: set ontouchstart for each cypress test for tablet and mobile devices
        win.ontouchstart = true;
      },
    });
  } else {
    cy.visit(url);
  }
  cy.wait(500);
  cy.get('.company-image').should('be.visible');
  cy.get('.company-info').should('be.visible');
  cy.get('.home-link').should('be.visible');
  cy.scrollTo('bottom', { duration: 500 });
  cy.get('.home-link').should('not.exist');
  ensureScrolling();
}

describe('[small mobile] multi products company', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check adidas products', () => checkCompanyProducts(`${DOMAIN}/products/adidas`, true));

  it('check mcdonalds products', () => checkCompanyProducts(`${DOMAIN}/products/mcdonalds`, true));

  it('check havi products', () => checkCompanyProducts(`${DOMAIN}/products/havi`, true));
});
