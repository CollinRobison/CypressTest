import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import googleHomepage from '../../support/pageObjects/googleHomepage';

const url = 'https://google.com';
const GoogleHomepage = new googleHomepage();


Given('I visit the Google homepage', () => {
  cy.visit(url)
})

When('I type "{}" in the search bar', (SearchValue) => {
  GoogleHomepage.getSearchBar().type(SearchValue);
})

Then('"{}" appears in the search bar', (SearchValue) => {
  GoogleHomepage.getSearchBar().should('have.value', SearchValue)
})