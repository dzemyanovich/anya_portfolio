const DOMAIN = Cypress.env('domain');
const MASTER_PASSWORD = Cypress.env('master_password');
const LOGIN_URL = `${DOMAIN}/login`;

function login(passwrod = MASTER_PASSWORD) {
  cy.get('.password-input')
    .type(passwrod)
    .type('{enter}');
}

function visit(url) {
  cy.visit(url, { failOnStatusCode: false });
}

// todo: review all [MINOR] todos
// todo: consider using another e2e tool
// todo: consider using Gherkin language
// todo: add testing for tablet and mobile (currently we have only desktop)
describe('home page', () => {
  beforeEach(() => {
    visit(DOMAIN);
  });

  it('check home page', () => {
    cy.get('.designer-title').contains('lead designer', { matchCase: false });

    cy.get('.page-link').should('have.length', 4);
    cy.get('.designer-title').should('have.length', 1);
    cy.get('.pivunova-brand').should('have.length', 1);
  });

  it('click on products link', () => {
    cy.get('.products-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/products`);
    });
  });

  it('click on contact link', () => {
    cy.get('.contact-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/contact`);
    });
  });

  it('click on about link', () => {
    cy.get('.about-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/about`);
    });
  });
});

describe('products page', () => {
  beforeEach(() => {
    localStorage.clear();
    visit(`${LOGIN_URL}?returnUrl=/products`);
    login();
    cy.wait(2000);
  });

  it('check products page', () => {
    cy.get('.products-page').should('have.length', 1);
    cy.get('.all-company-links').should('have.length', 1);
  });

  it('click on home link', () => {
    cy.get('.home-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/`);
    });
  });

  it('click on each company link', () => {
    cy.get('.company-link [role=link]').each((el) => {
      const dataHref = el.attr('data-href');
      if (dataHref.startsWith('https://')) {
        // skip cases when company link leads to expternal page (e.g. dropbox pdf file)
        return;
      }

      visit(`${DOMAIN}${dataHref}`);

      cy.get('.page-title').contains(el.text(), { matchCase: false });

      // wait until animation is done
      cy.wait(2000);
      cy.get('.company-info').should('not.be.visible');
      cy.get('.company-page').scrollTo('right', { duration: 2000 });
      cy.get('.company-info').should('be.visible');

      cy.go('back');
    });
  });
});

describe('about page', () => {
  beforeEach(() => {
    visit(`${DOMAIN}/about`);
  });

  it('check about page', () => {
    cy.contains('Anna Pivunova', { matchCase: false });
    cy.contains('Lead Designer', { matchCase: false });
    cy.get('.about-image').should('be.visible');
    cy.get('.about-content').should('be.visible');
  });
});

describe('contact page', () => {
  beforeEach(() => {
    visit(`${DOMAIN}/contact`);
  });

  it('check contact page', () => {
    cy.contains('Content will be added here...', { matchCase: false });
  });
});

describe('login', () => {
  const protectedUrl = '/products/adidas';

  beforeEach(() => {
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
