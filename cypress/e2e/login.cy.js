const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ignoreExceptions } = require('./shared');

const protectedUrl = '/products/adidas';

const protectedUrls = [
  '/products/adidas',
  '/products/mcdonalds',
];

function beforeScript() {
  ignoreExceptions();
  localStorage.clear();
  cy.wait(2000); // todo: not sure we need that
  visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`);
  cy.wait(2000); // todo: not sure we need that
}

// todo: tests work unstable
// "incorrect login" must be invoked before correct one because otherwise test fails in gitlab ci -> firefox:
// CypressError: `cy.type()` failed because it requires a DOM element.
// No elements in the current DOM matched your query:
// > cy.get(.password-input)
function incorrectLogin() {
  login('incorrect password');

  cy.wait(2000);
  cy.url().should('not.eq', `${DOMAIN}${protectedUrl}`);
}

function correctLogin() {
  login();

  cy.wait(2000);
  cy.url().should('eq', `${DOMAIN}${protectedUrl}`);
}

describe('[desktop] incorrect login', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('incorrect login', () => incorrectLogin());
});

describe('[desktop] correct login', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('correct login', () => correctLogin());
});

describe('[small mobile] incorrect login', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('incorrect login', () => incorrectLogin());
});

describe('[small mobile] correct login', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('correct login', () => correctLogin());
});

describe('access to protected routes', () => {
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
});

describe('access to login page', () => {
  beforeEach(() => {
    ignoreExceptions();
    useDesktop();
    localStorage.clear();
  });

  // todo: often fails with:
  // Timed out retrying after 4000ms
  it('cannot access login page when authenticatd', () => {
    visit(LOGIN_URL, { retryOnStatusCodeFailure: true });
    login();

    cy.wait(1000)
    visit(LOGIN_URL);
    cy.wait(500);
    cy.url().should('not.eq', LOGIN_URL)
  });
});
