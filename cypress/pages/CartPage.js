class CartPage {
  get cartItems()      { return cy.get('.cart_item') }
  get checkoutButton() { return cy.get('[data-test="checkout"]') }
  get continueShoppingButton() { return cy.get('[data-test="continue-shopping"]') }

  getRemoveButton(productName) {
    return cy.contains('.cart_item', productName)
      .find('button')
  }

  removeProduct(productName) {
    this.getRemoveButton(productName).click()
  }

  proceedToCheckout() {
    this.checkoutButton.click()
  }
}

export default new CartPage()
