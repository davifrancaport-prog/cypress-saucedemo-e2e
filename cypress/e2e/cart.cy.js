import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
    })
  })

  it('deve adicionar um produto ao carrinho', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack')
    InventoryPage.goToCart()
    CartPage.cartItems.should('have.length', 1)
    CartPage.cartItems.first().should('contain', 'Sauce Labs Backpack')
  })

  it('deve adicionar múltiplos produtos ao carrinho', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack')
    InventoryPage.addProductToCart('Sauce Labs Bike Light')
    InventoryPage.goToCart()
    CartPage.cartItems.should('have.length', 2)
  })

  it('deve remover produto do carrinho', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack')
    InventoryPage.goToCart()
    CartPage.removeProduct('Sauce Labs Backpack')
    CartPage.cartItems.should('have.length', 0)
  })
})
