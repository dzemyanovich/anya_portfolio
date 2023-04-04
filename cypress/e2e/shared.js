export const DOMAIN = Cypress.env('domain');
export const LOGIN_URL = `${DOMAIN}/login`;
const MASTER_PASSWORD = Cypress.env('master_password');

export function login(passwrod = MASTER_PASSWORD) {
  cy.get('.password-input')
    .type(passwrod)
    .type('{enter}');
}

export function ensureScrolling() {
  expect(window.scrollY).to.eq(window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight));
}

export function ignoreExceptions() {
  cy.once('uncaught:exception', () => false);
}

export function visit(url) {
  cy.visit(url, { failOnStatusCode: false });
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
