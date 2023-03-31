const { DOMAIN, visit, useDesktop } = require('./shared');

describe('contact page', () => {
  beforeEach(() => {
    useDesktop();
    visit(`${DOMAIN}/contact`);
  });

  it('check contact page', () => {
    cy.contains('let\'s get in touch', { matchCase: false });
    cy.get('.contact-links').should('be.visible');
  });
});
