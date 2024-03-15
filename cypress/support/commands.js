// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email) => {
    cy.visit('https://www.saucedemo.com')
    cy.get('input[id="user-name"]').type(email)
    cy.get('input[id="password"]').type("secret_sauce")
    cy.get('input[id="login-button"]').click()
})

Cypress.Commands.add('order_every_product', (email) => {
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('button[id="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('button[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
})
