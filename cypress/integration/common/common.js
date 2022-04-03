import { Then } from "cypress-cucumber-preprocessor/steps";

Then('the text "{}" is visible', (visibleText) => {
    cy   
  })

Then('the hyperlink "{}" is visible', (hyperlinkText) => {
  cy.get('a').contains(hyperlinkText).should('be.visible');
})