const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ignoreExceptions } = require('./shared');

const protectedUrl = '/products/adidas';

function beforeScript() {
  ignoreExceptions();
  localStorage.clear();
  visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`);
}

function incorrectLogin() {
  // hack: reaload and wait are required to make tests work
  cy.reload();
  cy.wait(2000);
  login('incorrect password');

  cy.wait(2000);
  cy.url().should('not.eq', `${DOMAIN}${protectedUrl}`);
}

function correctLogin() {
  login();

  cy.wait(2000);
  cy.url().should('eq', `${DOMAIN}${protectedUrl}`);
}

describe('[desktop] login', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('incorrect login', () => incorrectLogin());

  it('correct login', () => correctLogin());
});

describe('[small mobile] incorrect login', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('incorrect login', () => incorrectLogin());

  it('correct login', () => correctLogin());
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
