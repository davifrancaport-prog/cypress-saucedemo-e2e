import InventoryPage from '../pages/InventoryPage'

describe('Inventário de Produtos', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
    })
  })

  it('deve exibir o título da página de inventário', () => {
    InventoryPage.pageTitle.should('have.text', 'Products')
  })

  it('deve listar 6 produtos', () => {
    InventoryPage.productItems.should('have.length', 6)
  })

  it('deve ordenar produtos de A a Z', () => {
    InventoryPage.sortBy('Name (A to Z)')
    InventoryPage.productItems.first()
      .find('.inventory_item_name')
      .should('have.text', 'Backpack'.includes('Backpack') ? 'Sauce Labs Backpack' : '')
  })

  it('deve ordenar produtos por menor preço', () => {
    InventoryPage.sortBy('lohi')
    InventoryPage.productItems.first()
      .find('.inventory_item_price')
      .invoke('text')
      .then((price) => {
        expect(parseFloat(price.replace('$', ''))).to.be.lessThan(10)
      })
  })

  it('deve atualizar badge do carrinho ao adicionar produto', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack')
    InventoryPage.shoppingCartBadge.should('have.text', '1')
  })
})
