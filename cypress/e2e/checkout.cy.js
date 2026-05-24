import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
      InventoryPage.addProductToCart('Sauce Labs Backpack')
      InventoryPage.goToCart()
      CartPage.proceedToCheckout()
    })
  })

  it('deve completar o checkout com sucesso', () => {
    cy.fixture('users').then(({ checkoutInfo }) => {
      CheckoutPage.fillPersonalInfo(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
      )
      CheckoutPage.continue()
      CheckoutPage.summaryTotal.should('be.visible')
      CheckoutPage.finish()
      CheckoutPage.confirmationHeader.should('have.text', 'Thank you for your order!')
    })
  })

  it('deve exibir erro ao continuar sem preencher os campos', () => {
    CheckoutPage.continue()
    CheckoutPage.errorMessage.should('be.visible')
    CheckoutPage.errorMessage.should('contain', 'First Name is required')
  })

  it('deve exibir o valor total do pedido na página de revisão', () => {
    cy.fixture('users').then(({ checkoutInfo }) => {
      CheckoutPage.fillPersonalInfo(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
      )
      CheckoutPage.continue()
      CheckoutPage.summaryTotal.invoke('text').should('include', '$')
    })
  })
})
