/// <reference types="cypress" />
 
context('testar Home Page', () => {
  beforeEach(() => {
    cy.visit('http://www.google.com')
  })

  it('Deve preencher um CPF e verificar como válido', () => {
    cy.get('input[name="q"]').type('torne-se um programador')
    cy.get('form').submit()
    cy.get('form [data-hveid="CAUQAQ"]').click()

  })

})