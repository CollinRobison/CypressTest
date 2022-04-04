import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HoverTestSite from '../../support/pageObjects/hoverTestSite';

const url = 'http://the-internet.herokuapp.com/hovers';
const hoverTestSite = new HoverTestSite();

Given('I visit the Hover test site', () => {
  cy.visit(url);
});

Given('I hover the first profile', () => {
  hoverTestSite.getProfileOne().realHover();
});

Given('I hover the second profile', () => {
  hoverTestSite.getProfileTwo().realHover();
});

Given('I hover the third profile', () => {
  hoverTestSite.getProfileThree().realHover();
});

When('the Profile Name and Profile link is showing with the first User', () => {
  hoverTestSite.getProfileOne().contains('name: user1').should('be.visible');
  hoverTestSite.getProfileOne().contains('View profile').should('be.visible');
});

When('the Profile Name and Profile link is showing with the second User', () => {
  hoverTestSite.getProfileTwo().contains('name: user2').should('be.visible');
  hoverTestSite.getProfileTwo().contains('View profile').should('be.visible');
});

When('the Profile Name and Profile link is showing with the third User', () => {
  hoverTestSite.getProfileThree().contains('name: user3').should('be.visible');
  hoverTestSite.getProfileThree().contains('View profile').should('be.visible');
});

Then('user clicks the profile link for the first user', ()=> {
  hoverTestSite.getProfileOne().contains('View profile').click();
  cy.pause;
});

Then('user clicks the profile link for the second user', ()=> {
  hoverTestSite.getProfileTwo().contains('View profile').click();
  cy.pause;
});

Then('user clicks the profile link for the third user', ()=> {
  hoverTestSite.getProfileThree().contains('View profile').click();
  cy.pause;
});

Then('user should be on the first user profile page', ()=> {
  cy.url().should('include', '/users/1');
});

Then('user should be on the second user profile page', ()=> {
  cy.url().should('include', '/users/2');
});

Then('user should be on the third user profile page', ()=> {
  cy.url().should('include', '/users/3');
});

