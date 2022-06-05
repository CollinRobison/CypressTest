# This is a test Cypress project for learning purposes

I created this project to test various things with Cypress and just overall refine my automation skills.

This project is structured as a BDD automation project and uses Cypress' Cucumber plugin.

A lot of these tests will be using the site `http://the-internet.herokuapp.com/` which is a site that has many great examples for testing automation skills. That is why the `baseUrl` happens to be that site.

 - Collin Robison

## To run cypress UI:
`npx cypress open`


## To run headless Cypress (console-only):
`npx cypress open`


## Before committing a change: 
1. run `npm run lint:all`
1. fix any issues found. 

**Side note:** cypress.env.json in a normal project should be ignored by git since it generally holds passwords. However in this project any password I use is public knowledge so it is no issue. 

## Need to do: 
- add some tests in mobile view and different viewports
- get some tags 
- Work on cypress config
- add custom cypress commands
- make more custom tests
- make some tests that test only apis: get apis from https://rapidapi.com/hub
- make some tests that manipulate a website by mocking api items
- For the tests that won't run in non-chromium based browsers use the techniques mentioned here to prevent them from running if user runs with anything else.
  - https://learn.cypress.io/advanced-cypress-concepts/how-to-test-various-browsers-and-viewports
- create some tests using these methods
  - https://learn.cypress.io/advanced-cypress-concepts/important-cypress-methods-you-need-to-know
### possible to-dos
- get Dashboard up and running
- Add some accessibility tests

## Plugins and Packages used in project: 
- [Cucumber plugin: BDD Testing](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#visual-Studio-Code)
- [cypress-real-events: Allows for hover and other actions not handled well in native Cypress.](https://github.com/dmtrKovalenko/cypress-real-events)
- [es-lint: lints JS code](https://eslint.org/)
- [ChanceJS: Random value library](https://chancejs.com/)
