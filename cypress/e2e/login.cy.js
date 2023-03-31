const { DOMAIN, LOGIN_URL, login, visit, useDesktop } = require('./shared');

// todo: add testing for tablet and mobile (currently we have only desktop)

describe('login', () => {
  const protectedUrl = '/products/adidas';

  beforeEach(() => {
    useDesktop();
    localStorage.clear();
    visit(`${LOGIN_URL}?returnUrl=${protectedUrl}`);
  });

  it('correct login', () => {
    login();

    cy.wait(2000).then(() => {
      cy.url().should('eq', `${DOMAIN}${protectedUrl}`)
    });
  });

  it('incorrect login', () => {
    login('incorrect password');

    cy.wait(2000).then(() => {
      cy.url().should('not.eq', `${DOMAIN}${protectedUrl}`)
    });
  });
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
