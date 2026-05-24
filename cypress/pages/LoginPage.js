class LoginPage {
  get usernameInput() { return cy.get('[data-test="username"]') }
  get passwordInput() { return cy.get('[data-test="password"]') }
  get loginButton()  { return cy.get('[data-test="login-button"]') }
  get errorMessage() { return cy.get('[data-test="error"]') }

  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    this.usernameInput.clear().type(username)
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password)
  }

  submit() {
    this.loginButton.click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }
}

export default new LoginPage()
