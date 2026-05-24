class CheckoutPage {
  get firstNameInput()  { return cy.get('[data-test="firstName"]') }
  get lastNameInput()   { return cy.get('[data-test="lastName"]') }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]') }
  get continueButton()  { return cy.get('[data-test="continue"]') }
  get finishButton()    { return cy.get('[data-test="finish"]') }
  get confirmationHeader() { return cy.get('.complete-header') }
  get errorMessage()    { return cy.get('[data-test="error"]') }
  get summaryTotal()    { return cy.get('.summary_total_label') }

  fillPersonalInfo(firstName, lastName, postalCode) {
    this.firstNameInput.type(firstName)
    this.lastNameInput.type(lastName)
    this.postalCodeInput.type(postalCode)
  }

  continue() {
    this.continueButton.click()
  }

  finish() {
    this.finishButton.click()
  }
}

export default new CheckoutPage()
