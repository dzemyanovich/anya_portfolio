// TODO: make url configurable depending on env
const DOMAIN = 'http://localhost:8080';

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

  it('click on projects link', () => {
    cy.get('.projects-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/projects`);
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

describe('projects page', () => {
  beforeEach(() => {
    cy.visit(`${DOMAIN}/projects`);
  });

  it('check projects page', () => {
    cy.get('.projects-page').should('have.length', 1);
    cy.get('.links-container').should('have.length', 1);
  });

  it('click on home link', () => {
    cy.get('.home-link').click();

    cy.on('url:changed', (newUrl) => {
      expect(newUrl).to.eq(`${DOMAIN}/`);
    });
  });

  it('click on each project link', () => {
    cy.get('.project-link [role=link]').each((el) => {
      cy.visit(`${DOMAIN}${el.attr('href')}`);

      cy.get('.page-title').contains(el.text(), { matchCase: false });

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

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
