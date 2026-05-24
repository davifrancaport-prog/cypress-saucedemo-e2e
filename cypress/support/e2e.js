import './commands'

// Silencia erros de JS não relacionados aos testes
Cypress.on('uncaught:exception', () => false)
