import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://the-internet.herokuapp.com/hovers';
   


Given('I visit the Hover test site', () => {
  cy.visit(url)
})

When('I hover the profile', () => {
  cy.get('.figure').eq(1).realHover();
    cy.pause();
    
  })
  