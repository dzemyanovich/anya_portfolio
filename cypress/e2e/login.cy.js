const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ignoreExceptions } = require('./shared');

const protectedUrl = '/products/adidas';

function beforeScript() {
  ignoreExceptions();
  localStorage.clear();
  visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`);
  cy.wait(1000); // todo: will it help???
}

function correctLogin() {
  login();

  cy.wait(2000);
  cy.url().should('eq', `${DOMAIN}${protectedUrl}`);
}

function incorrectLogin() {
  login('incorrect password');

  cy.wait(2000);
  cy.url().should('not.eq', `${DOMAIN}${protectedUrl}`);
}

describe('[desktop] login', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('correct login', () => correctLogin());

  it('incorrect login', () => incorrectLogin());
});

describe('[small mobile] login', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('correct login', () => correctLogin());

  it('incorrect login', () => incorrectLogin());
});

describe('access to protected routes', () => {
  const protectedUrls = [
    '/products/adidas',
    '/products/mcdonalds',
  ];

  beforeEach(() => {
    ignoreExceptions();
    useDesktop();
    localStorage.clear();
  });

  it('cannot access protected route', () => {
    protectedUrls.map((protectedUrl) => {
      visit(`${DOMAIN}${protectedUrl}`);
      cy.wait(1000);
      cy.url().should('eq', `${LOGIN_URL}?returnUrl=${protectedUrl}`);
    });
  });

  it('cannot access login page when authenticatd', () => {
    visit(LOGIN_URL, { retryOnStatusCodeFailure: true });
    login();

    cy.wait(1000)
    visit(LOGIN_URL);
    cy.wait(500);
    cy.url().should('not.eq', LOGIN_URL)
  });
});
