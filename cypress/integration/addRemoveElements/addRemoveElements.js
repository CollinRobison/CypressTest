import {Before, Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import AddRemoveElements from '../../support/pageObjects/addRemoveElements';
import Chance from 'chance';

const url = '/add_remove_elements/';
const addRemoveElements = new AddRemoveElements();
const chance = new Chance();


Before(function() {
  cy.visit(url);
});

Given('I visit the Add Remove Elements test site', () => {
  cy.visit(url);
});

Given('user clicks the Add Element button', () => {
  addRemoveElements.getAddElementButton().click();
});

Given('user clicks the Add Element button multiple times', () => {
  const randomElementNumber = chance.integer({min: 3, max: 12});
  for (let n = 0; n < randomElementNumber; n ++) {
    addRemoveElements.getAddElementButton().click();
  }
  cy.wrap(randomElementNumber).as('randomElementNumber');
});

Given('the Add Element button is clicked "{int}" times', (buttonClicks) => {
  for (let n=0; n < buttonClicks; n++) {
    addRemoveElements.getAddElementButton().click();
  }
});

When('there are "{int}" delete button visible', (deleteButtons) => {
  addRemoveElements.getDeleteElementsContainer().find('button').should('have.length', deleteButtons);
});

When('the amount of visible manually added delete buttons equal the amount that the user clicked the Add Element button', () => {
  cy.get('@randomElementNumber').then(randomElementNumber => {
    addRemoveElements.getDeleteElementsContainer().find('button').should('have.length', randomElementNumber);
  });
});

When('the user clicks all the multiple delete buttons', ()=>{
  cy.get('@randomElementNumber').then(randomElementNumber => {
    for (let n = 0; n<randomElementNumber; n++) {
      addRemoveElements.getNthDeleteButton(0).click();
    }
  });
});

When('the manually added delete button appears', () => {
  addRemoveElements.getDeleteButton().should('be.visible');
});

When('user clicks the delete button', () => {
  addRemoveElements.getDeleteButton().click();
});

Then('user is able to delete the number "{int}" delete button in line', (deleteButton) => {
  addRemoveElements.getNthDeleteButton(deleteButton-1).click();
});

Then('there are only "{int}" delete buttons left', (deleteButton) => {
  addRemoveElements.getDeleteElementsContainer().find('button').should('have.length', deleteButton);
});

Then('the manually added delete button will show', () => {
  addRemoveElements.getDeleteButton().should('be.visible');
});

Then('the delete button should not be visible', () => {
  addRemoveElements.getDeleteButton().should('not.exist');
});
