import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import Checkboxes from '../../support/pageObjects/checkboxes';

const url = '/checkboxes';
const checkboxes = new Checkboxes();

Before(function() {
  cy.visit(url);
});

Given('the first and second checkbox is unchecked', () =>{
  checkboxes.getNthCheckbox(0).uncheck({force: true});
  checkboxes.getNthCheckbox(1).uncheck({force: true});
});

Given('the first and second checkbox is checked', () =>{
  checkboxes.getNthCheckbox(0).check({force: true});
  checkboxes.getNthCheckbox(1).check({force: true});
});

When('user checks the first checkbox', () =>{
  checkboxes.getNthCheckbox(0).check();
});

When('user checks the second checkbox', () =>{
  checkboxes.getNthCheckbox(1).check();
});

When('user unchecks the first checkbox', () =>{
  checkboxes.getNthCheckbox(0).uncheck();
});

When('user unchecks the second checkbox', () =>{
  checkboxes.getNthCheckbox(1).uncheck();
});

Then('the first checkbox is checked', () =>{
  checkboxes.getNthCheckbox(0).should('be.checked');
});

Then('the second checkbox is checked', () =>{
  checkboxes.getNthCheckbox(1).should('be.checked');
});

Then('the first checkbox is unchecked', () =>{
  checkboxes.getNthCheckbox(0).should('not.be.checked');
});

Then('the second checkbox is unchecked', () =>{
  checkboxes.getNthCheckbox(1).should('not.be.checked');
});
