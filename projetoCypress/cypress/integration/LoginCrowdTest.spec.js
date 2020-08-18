/// <reference types="Cypress" />

beforeEach(() =>{
    //cy.viewport();
    cy.visit("http://blackmirror.crowdtest.me.s3-website-us-east-1.amazonaws.com/");
})

describe('Validacao testes Login', ()=>{
it('Login com sucesso', ()=>{
    // arrange
    var email= "4c7649965e@emaillab.xyz"
    var senha="teste123"
    //var msgSucesso= "qwe123qwe"
    var msgSucesso= "Bem-vindo"

    //acts
    cy.get('#login').type(email)
    cy.get('#password').type(senha)
    cy.get(':nth-child(3) > .btn').click()

    //asserts
    cy.get('.title > .col > span').should('contain', msgSucesso)

})

})