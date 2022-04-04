import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import GoogleHomepage from '../../support/pageObjects/googleHomepage';

const url = 'https://google.com';
const googleHomepage = new GoogleHomepage();


Given('I visit the Google homepage', () => {
  cy.visit(url);
});

When('I type "{}" in the search bar', (SearchValue) => {
  googleHomepage.getSearchBar().type(SearchValue);
});

Then('"{}" appears in the search bar', (SearchValue) => {
  googleHomepage.getSearchBar().should('have.value', SearchValue);
});
