class AddRemoveElements {
  getAddElementButton() {
    return cy.get('button[onclick="addElement()"]');
  }
  getDeleteElementsContainer() {
    return cy.get('#elements');
  }
  getDeleteButton() {
    return cy.get('.added-manually');
  }
  getNthDeleteButton(nthDeleteButton) {
    return cy.get('.added-manually').eq(nthDeleteButton);
  }
}

export default AddRemoveElements;

