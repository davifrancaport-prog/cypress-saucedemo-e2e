import LoginPage from '../pages/LoginPage'

// Custom command: login via UI
Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit()
  LoginPage.login(username, password)
})
