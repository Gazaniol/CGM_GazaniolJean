// describe('Login page', () => {
//     beforeEach(() => {
//       cy.visit('https://www.saucedemo.com')
//     })
//     it('Greets with correct elements', () => {
//       cy.contains('div[class="login_logo"]', 'Swag Labs')
//       cy.get('input[id="user-name"]').invoke('attr', 'placeholder').should('contain', 'Username')
//       cy.get('input[id="password"]').invoke('attr', 'placeholder').should('contain', 'Password')
//       cy.get('input[id="login-button"]').invoke('attr', 'value').should('contain', 'Login')
//     })

//     it('Username is required', () => {
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Username is required")
//       cy.get('input[id="password"]').type("aaaaaaaa")
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Username is required")
//     })

//     it('Password is required incorrect user', () => {
//       cy.get('input[id="user-name"]').type("aaaaaaaa")
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Password is required")
//     })
//     it('Password is required incorrect user', () => {
//       cy.get('input[id="user-name"]').type("standard_user")
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Password is required")
//     })

//     it('Locked out user', () => {
//       cy.get('input[id="user-name"]').type("locked_out_user")
//       cy.get('input[id="password"]').type("secret_sauce")
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Sorry, this user has been locked out.")
//     })

//     it('Wrong password', () => {
//       cy.get('input[id="user-name"]').type("locked_out_user")
//       cy.get('input[id="password"]').type("321654987")
//       cy.get('input[id="login-button"]').click()
//       cy.get('h3[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service")
//     })

//     it('Login and Logout', () => {
//       cy.get('input[id="user-name"]').type("standard_user")
//       cy.get('input[id="password"]').type("secret_sauce")
//       cy.get('input[id="login-button"]').click()
//       cy.get('div[class="app_logo"]').should('contain', "Swag Labs")
//       cy.get('button[id="react-burger-menu-btn"]').click()
//       cy.get('a[id="logout_sidebar_link"]').click()
//       cy.contains('div[class="login_logo"]', 'Swag Labs')
//     })
// })

describe('Login page', () => {
  beforeEach(() => {
    cy.login('standard_user')
  })
  // it('Add Remove products to the cart', () => {
  //   cy.get('a[id="item_4_title_link"]').should('contain', "Sauce Labs Backpack").click()
  //   cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click()
  //   cy.get('a[class="shopping_cart_link"]').should('contain', "1")
  //   cy.get('button[id="back-to-products"]').click()
  //   cy.get('button[id="add-to-cart-sauce-labs-bike-light"]').click()
  //   cy.get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  //   cy.get('button[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
  //   cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click()
  //   cy.get('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
  //   cy.get('a[class="shopping_cart_link"]').should('contain', "6")
  //   cy.get('button[id="remove-sauce-labs-backpack"]').click()
  //   cy.get('a[id="item_2_title_link"]').should('contain', "Sauce Labs Onesie").click()
  //   cy.get('button[id="remove-sauce-labs-onesie"]').click()
  //   cy.get('a[class="shopping_cart_link"]').should('contain', "4")
  //   cy.get('a[class="shopping_cart_link"]').click()
  //   cy.get('button[id="remove-sauce-labs-bolt-t-shirt"]').click()
  //   cy.get('a[class="shopping_cart_link"]').should('contain', "3")
  // })

  it('Complete an order', () => {
    cy.order_every_product()
    cy.get('a[class="shopping_cart_link"]').click()
    cy.get('a[id="item_0_title_link"]').should('contain',"Sauce Labs Bike Light")
    cy.get('a[id="item_1_title_link"]').should('contain', "Sauce Labs Bolt T-Shirt")
    cy.get('a[id="item_2_title_link"]').should('contain', "Sauce Labs Onesie")
    cy.get('a[id="item_3_title_link"]').should('contain', "Test.allTheThings() T-Shirt (Red)")
    cy.get('a[id="item_4_title_link"]').should('contain', "Sauce Labs Backpack")
    cy.get('a[id="item_5_title_link"]').should('contain', "Sauce Labs Fleece Jacket")
    cy.get('button[id="continue-shopping"]').should('contain', "Continue Shopping")
    cy.get('button[id="checkout"]').should('have.css', 'background-color').and('eq', 'rgb(61, 220, 145)')
    cy.get('button[id="checkout"]').should('contain', "Checkout").click()
    cy.get('input[id="first-name"]').invoke('attr', 'placeholder').should('contain', 'First Name')
    cy.get('input[id="first-name"]').type("Jean")
    cy.get('input[id="last-name"]').invoke('attr', 'placeholder').should('contain', 'Last Name')
    cy.get('input[id="last-name"]').type("Gazaniol")
    cy.get('input[id="postal-code"]').invoke('attr', 'placeholder').should('contain', 'Zip/Postal Code')
    cy.get('input[id="postal-code"]').type("Thebest")
    cy.get('button[id="cancel"]').should('contain', "Cancel")
    cy.get('input[id="continue"]').should('have.css', 'background-color').and('eq', 'rgb(61, 220, 145)')
    cy.get('input[id="continue"]').click()

  })
})