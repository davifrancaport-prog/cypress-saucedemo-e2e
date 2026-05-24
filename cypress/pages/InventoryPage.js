class InventoryPage {
  get pageTitle()       { return cy.get('[data-test="title"]') }
  get productItems()    { return cy.get('.inventory_item') }
  get sortDropdown()    { return cy.get('[data-test="product-sort-container"]') }
  get shoppingCartBadge() { return cy.get('[data-test="shopping-cart-badge"]') }
  get shoppingCartLink()  { return cy.get('[data-test="shopping-cart-link"]') }

  getAddToCartButton(productName) {
    return cy.contains('.inventory_item', productName)
      .find('button')
  }

  getProductPrice(productName) {
    return cy.contains('.inventory_item', productName)
      .find('.inventory_item_price')
  }

  addProductToCart(productName) {
    this.getAddToCartButton(productName).click()
  }

  sortBy(option) {
    this.sortDropdown.select(option)
  }

  goToCart() {
    this.shoppingCartLink.click()
  }
}

export default new InventoryPage()
