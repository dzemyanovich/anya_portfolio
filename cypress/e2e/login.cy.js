const { DOMAIN, LOGIN_URL, login, visit, useDesktop, useSmallMobile } = require('./shared');

const protectedUrl = '/products/adidas';

function beforeLogin() {
  localStorage.clear();
  visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`);
}

function correctLogin() {
  login();

  cy.wait(2000).then(() => {
    cy.url().should('eq', `${DOMAIN}${protectedUrl}`)
  });
}

function incorrectLogin() {
  login('incorrect password');

  cy.wait(2000).then(() => {
    cy.url().should('not.eq', `${DOMAIN}${protectedUrl}`)
  });
}

// todo: login tests work unstable
describe('[desktop] login', () => {
  beforeEach(() => {
    useDesktop();
    beforeLogin();
  });

  it('correct login', () => correctLogin);

  it('incorrect login', () => incorrectLogin);
});

describe('[small mobile] login', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeLogin();
  });

  it('correct login', () => correctLogin);

  it('incorrect login', () => incorrectLogin);
});

describe('access to protected routes', () => {
  const protectedUrls = [
    '/products/adidas',
    '/products/mcdonalds',
  ];

  beforeEach(() => {
    useDesktop();
    localStorage.clear();
  });

  it('cannot access protected route', () => {
    protectedUrls.map((protectedUrl) => {
      visit(`${DOMAIN}${protectedUrl}`);
      cy.wait(1000).then(() => {
        cy.url().should('eq', `${LOGIN_URL}?returnUrl=${protectedUrl}`)
      });
    });
  });

  it('cannot access login page when authenticatd', () => {
    visit(LOGIN_URL, { retryOnStatusCodeFailure: true });
    login();

    cy.wait(1000).then(() => {
      visit(LOGIN_URL);
      cy.wait(500).then(() => {
        cy.url().should('not.eq', LOGIN_URL)
      });
    });
  });
});
