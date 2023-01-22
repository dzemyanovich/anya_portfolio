const DOMAIN = Cypress.env('domain');

describe('home page', () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
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
    // todo: sign in for protected pages
    cy.visit(`${DOMAIN}/products`);
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
      cy.visit(`${DOMAIN}${el.attr('href')}`);

      cy.get('.page-title').contains(el.text(), { matchCase: false });

      // wait until animation is done
      cy.wait(2000);
      cy.get('.project-description').should('not.be.visible');
      cy.get('.project-page').scrollTo('right', { duration: 2000 });
      cy.get('.project-description').should('be.visible');

      cy.go('back');
    });
  });
});

describe('about page', () => {
  beforeEach(() => {
    cy.visit(`${DOMAIN}/about`);
  });

  it('check about page', () => {
    cy.contains('about', { matchCase: false });
  });
});

describe('contact page', () => {
  beforeEach(() => {
    cy.visit(`${DOMAIN}/contact`);
  });

  it('check contact page', () => {
    cy.contains('contact', { matchCase: false });
  });
});
