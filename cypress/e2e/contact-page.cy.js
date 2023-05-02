const { DOMAIN, visit, useDesktop, useSmallMobile, useBigTablet, ignoreExceptions } = require('./shared');

function beforeScript(isTouchDevice) {
  ignoreExceptions();
  visit(`${DOMAIN}/contact`, isTouchDevice);
}

function checkContactPage() {
  cy.contains('let\'s get in touch', { matchCase: false });
  cy.get('.contact-links').should('be.visible');
}

describe('[desktop] contact page', () => {
  const isTouchDevice = false;  

  beforeEach(() => {
    useDesktop();
    beforeScript(isTouchDevice);
  });

  it('check contact page', () => checkContactPage());
});

describe('[big tablet] contact page', () => {
  const isTouchDevice = true;  

  beforeEach(() => {
    useBigTablet();
    beforeScript(isTouchDevice);
  });

  it('check contact page', () => checkContactPage());
});

describe('[small mobile] contact page', () => {
  const isTouchDevice = true;  

  beforeEach(() => {
    useSmallMobile();
    beforeScript(isTouchDevice);
  });

  it('check contact page', () => checkContactPage());
});
