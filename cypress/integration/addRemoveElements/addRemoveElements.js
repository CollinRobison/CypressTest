import {Given} from 'cypress-cucumber-preprocessor/steps';
import AddRemoveElements from '../../support/pageObjects/addRemoveElements';

const url = '/add_remove_elements/';
const addRemoveElements = new AddRemoveElements();

Given('I visit the Add Remove Elements test site', () => {
  cy.visit(url);
});

Given('user clicks the Add Element button', () => {
  addRemoveElements.getAddElementButton().click();
});
