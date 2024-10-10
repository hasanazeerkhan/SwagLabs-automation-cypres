import{credentials,elements} from '../support/data.js' 

describe('Login', function(){
  beforeEach(function(){
    cy.visit('/')
})
  it('Login to the website with all the accepted user name', function(){
    Object.keys(credentials.validUsername).forEach(key => {
      let i = `${credentials.validUsername[key]}`;
      cy.get(elements.loginPage.username).type(i);
      cy.get(elements.loginPage.password).type(credentials.password);
      cy.get(elements.loginPage.loginButton).click();
      cy.url().should('eq',elements.shoppingList.url);
      cy.get(elements.openMenu.icon).click();
      cy.get(elements.openMenu.logout).click();
      cy.url().should('eq',elements.url);
  });
  })
  
})