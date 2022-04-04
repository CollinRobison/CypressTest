class HoverTestSite {
  getProfileOne() {
    return cy.get('.figure').eq(0);
  }
  getProfileTwo() {
    return cy.get('.figure').eq(1);
  }
  getProfileThree() {
    return cy.get('.figure').eq(2);
  }
}

export default HoverTestSite;
