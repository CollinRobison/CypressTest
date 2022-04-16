class Checkboxes {
  getNthCheckbox(nthCheckbox) {
    return cy.get('input[type="checkbox"]').eq(nthCheckbox);
  }
}

export default Checkboxes;
