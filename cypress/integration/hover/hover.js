import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import hoverTestSite from '../../support/pageObjects/hoverTestSite';

const url = 'http://the-internet.herokuapp.com/hovers';
const HoverTestSite = new hoverTestSite();

Given('I visit the Hover test site', () => {
  cy.visit(url);
});

Given('I hover the first profile', () => {
  HoverTestSite.getProfileOne().realHover();
});

Given('I hover the second profile', () => {
  HoverTestSite.getProfileTwo().realHover();
});

Given('I hover the third profile', () => {
  HoverTestSite.getProfileThree().realHover();
});

When('the Profile Name and Profile link is showing with the first User', () => {
  HoverTestSite.getProfileOne().contains('name: user1').should('be.visible');
  HoverTestSite.getProfileOne().contains('View profile').should('be.visible');
});

When('the Profile Name and Profile link is showing with the second User', () => {
  HoverTestSite.getProfileTwo().contains('name: user2').should('be.visible');
  HoverTestSite.getProfileTwo().contains('View profile').should('be.visible');
});

When('the Profile Name and Profile link is showing with the third User', () => {
  HoverTestSite.getProfileThree().contains('name: user3').should('be.visible');
  HoverTestSite.getProfileThree().contains('View profile').should('be.visible');
});

Then('user clicks the profile link for the first user', ()=> {
  HoverTestSite.getProfileOne().contains('View profile').click();
  cy.pause;
});

Then('user clicks the profile link for the second user', ()=> {
  HoverTestSite.getProfileTwo().contains('View profile').click();
  cy.pause;
});

Then('user clicks the profile link for the third user', ()=> {
  HoverTestSite.getProfileThree().contains('View profile').click();
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

