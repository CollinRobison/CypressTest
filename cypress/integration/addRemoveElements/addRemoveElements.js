import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import AddRemoveElements from '../../support/pageObjects/addRemoveElements';

const url = '/add_remove_elements/';
const addRemoveElements = new AddRemoveElements();

Given('I visit the Add Remove Elements test site', () => {
  cy.visit(url);
});

Given('user clicks the Add Element button', () => {
  addRemoveElements.getAddElementButton().click();
});

When('the manually added delete button appears', () => {
  addRemoveElements.getDeleteButton().should('be.visible');
});

When('user clicks the delete button', () => {
  addRemoveElements.getDeleteButton().click();
});

Then('the manually added delete button will show', () => {
  addRemoveElements.getDeleteButton().should('be.visible');
});

Then('the delete button should not be visible', () => {
  addRemoveElements.getDeleteButton().should('not.exist');
});
