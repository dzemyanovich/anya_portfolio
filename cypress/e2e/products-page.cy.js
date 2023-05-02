const {
  DOMAIN, LOGIN_URL,
  login, visit, useDesktop, useBigTablet, useSmallMobile, ignoreExceptions,
} = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  localStorage.clear();
  visit(`${LOGIN_URL}?returnUrl=/products`, isTouchDevice);
  login();
  cy.wait(2000);
}

function checkProductsPage() {
  cy.get('.products-page').should('have.length', 1);
  cy.get('.all-company-links').should('have.length', 1);
}

describe('[desktop] products page', () => {
  const isTouchDevice = false;

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('check products page', () => checkProductsPage());

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

      visit(`${DOMAIN}${dataHref}`, isTouchDevice);

      cy.get('.page-title').contains(el.text(), { matchCase: false });

      // wait until animation is done
      cy.wait(2000);
      cy.get('.company-info').should('not.be.visible');
      cy.get('.company-page').scrollTo('right', { duration: 500 });
      cy.get('.company-info').should('be.visible');

      cy.go('back');
    });
  });
});

describe('[big tablet] products page', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useBigTablet();
    beforeScript(isTouchDevice);
  });

  it('check products page', () => checkProductsPage());
});

describe('[small mobile] products page', () => {
  const isTouchDevice = true;

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('check products page', () => checkProductsPage());
});
