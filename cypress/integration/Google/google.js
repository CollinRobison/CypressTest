import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import GoogleHomepage from '../../support/pageObjects/googleHomepage';

const googleHomepage = new GoogleHomepage();

Given('I visit the Google homepage', () => {
  cy.visit(Cypress.env('google_homepage_url'));
});

When('I type "{}" in the search bar', (SearchValue) => {
  googleHomepage.getSearchBar().type(SearchValue);
});

Then('"{}" appears in the search bar', (SearchValue) => {
  googleHomepage.getSearchBar().should('have.value', SearchValue);
});
