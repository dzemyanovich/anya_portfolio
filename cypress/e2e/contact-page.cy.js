const { DOMAIN, visit, useDesktop, useSmallMobile } = require('./shared');

function beforeScript() {
  visit(`${DOMAIN}/contact`);
}

function checkContactPage() {
  cy.contains('let\'s get in touch', { matchCase: false });
  cy.get('.contact-links').should('be.visible');
}

describe('[desktop] contact page', () => {
  beforeEach(() => {
    useDesktop();
    beforeScript();
  });

  it('check contact page', () => checkContactPage);
});

describe('[small mobile] contact page', () => {
  beforeEach(() => {
    useSmallMobile();
    beforeScript();
  });

  it('check contact page', () => checkContactPage);
});
