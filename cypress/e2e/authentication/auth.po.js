const usernameField = "//input[@type='email']";
const passwordField = "//input[@type='password']";
const submitButton = "//button[@type='submit']";

export const email = 'ui-test-user@test.com';
export const password = 'da39a3ee5e6b4b0d3255bfef9';

export function login(username, password) {
  cy.visit('/login');
  cy.xpath(usernameField).type(username);
  cy.xpath(passwordField).type(password);
  cy.xpath(submitButton).click();
  cy.url().should('include', '/home');
}