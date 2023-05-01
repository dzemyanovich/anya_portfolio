const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile, ignoreExceptions } = require('./shared');

// retries are required because tests randomly fail
const RETRIES = 3;

const protectedUrl = '/products/adidas';

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  localStorage.clear();
  visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`, isTouchDevice);
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

describe('[desktop] login', { retries: RETRIES }, () => {
  const isTouchDevice = false;  

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('incorrect login', () => incorrectLogin());

  it('correct login', () => correctLogin());
});

describe('[small mobile] incorrect login', { retries: RETRIES }, () => {
  const isTouchDevice = true;  

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('incorrect login', () => incorrectLogin());

  it('correct login', () => correctLogin());
});

describe('access to protected routes', { retries: RETRIES }, () => {
  const isTouchDevice = false;
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
      visit(`${DOMAIN}${protectedUrl}`, isTouchDevice);
      cy.wait(1000);
      cy.url().should('eq', `${LOGIN_URL}?returnUrl=${protectedUrl}`);
    });
  });

  it('cannot access login page when authenticatd', () => {
    visit(LOGIN_URL, isTouchDevice);
    login();

    cy.wait(1000)
    visit(LOGIN_URL, isTouchDevice);
    cy.wait(1000);
    cy.url().should('not.eq', LOGIN_URL)
  });
});
