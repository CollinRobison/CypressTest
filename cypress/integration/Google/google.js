import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I visit the Google homepage', () => {
  cy.visit(url)
})

When('I type "{}" in the search bar', (SearchValue) => {
    cy.get('input[title="Search"]').type(SearchValue);
})

Then('"{}" appears in the search bar', (SearchValue) => {
    cy.get('input[title="Search"]').should('have.value', SearchValue)
})