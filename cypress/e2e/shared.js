export const DOMAIN = Cypress.env('domain');
export const LOGIN_URL = `${DOMAIN}/login`;
const MASTER_PASSWORD = Cypress.env('master_password');

export function login(passwrod = MASTER_PASSWORD) {
  cy.get('.password-input')
    .type(passwrod)
    .type('{enter}');
}

export function scrolledTop() {
  cy.window()
    .its('scrollY')
    .should('equal', 0);
}

export function scrolledBottom() {
  cy.window()
    .its('scrollY')
    .should('not.equal', 0);
}

export function ignoreExceptions() {
  cy.once('uncaught:exception', () => false);
}

// todo: add more [tablet] and [mobile] e2e tests
export function visit(url, isTouchDevice) {
  if (!isTouchDevice) {
    cy.visit(url, { failOnStatusCode: false });
  } else {
    cy.visit(url, {
      failOnStatusCode: false,
      onBeforeLoad(win) {
        win.ontouchstart = true;
      },
    });
  }
}

export function useDesktop() {
  cy.viewport(1280, 768);
}

export function useBigTablet() {
  cy.viewport(1050, 768);
}

export function useSmallMobile() {
  cy.viewport(400, 667);
}
