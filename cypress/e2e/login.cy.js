import LoginPage from '../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('deve fazer login com usuário válido', () => {
    cy.fixture('users').then(({ validUser }) => {
      LoginPage.login(validUser.username, validUser.password)
      cy.url().should('include', '/inventory.html')
    })
  })

  it('deve exibir erro com credenciais inválidas', () => {
    cy.fixture('users').then(({ invalidUser }) => {
      LoginPage.login(invalidUser.username, invalidUser.password)
      LoginPage.errorMessage.should('be.visible')
      LoginPage.errorMessage.should('contain', 'Username and password do not match')
    })
  })

  it('deve exibir erro para usuário bloqueado', () => {
    cy.fixture('users').then(({ lockedUser }) => {
      LoginPage.login(lockedUser.username, lockedUser.password)
      LoginPage.errorMessage.should('contain', 'Sorry, this user has been locked out')
    })
  })

  it('deve exibir erro ao enviar formulário vazio', () => {
    LoginPage.submit()
    LoginPage.errorMessage.should('be.visible')
    LoginPage.errorMessage.should('contain', 'Username is required')
  })
})
