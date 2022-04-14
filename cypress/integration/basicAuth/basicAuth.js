import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import BasicAuth from '../../support/pageObjects/basicAuth';

const url = '/basic_auth';
const basicAuth = new BasicAuth();


Given('user enters correct credentials in the basic auth login prompt', () =>{
  cy.visit(url, {
    auth: {
      username: Cypress.env('basic_auth_user'),
      password: Cypress.env('basic_auth_pass'),
    },
  });
});

Then('user should see the basic auth success message', () => {
  basicAuth.getBasicAuthContent().should('contain', 'Basic Auth').and('contain', 'Congratulations! You must have the proper credentials.');
});
