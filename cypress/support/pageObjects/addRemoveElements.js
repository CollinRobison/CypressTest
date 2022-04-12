class AddRemoveElements {
  getAddElementButton() {
    return cy.get('button[onclick="addElement()"]');
  }
}

export default AddRemoveElements;

