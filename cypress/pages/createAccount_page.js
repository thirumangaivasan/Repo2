const selectors = require ("../Selectors/createAccountSelectors")


export class CreateAccountPage{

    createAccount(com_name){
       cy.get(selectors.Actions).click()
       cy.get(selectors.NewAccount).click() 
        cy.wait(5000)
       cy.get(selectors.companyName).type(com_name)
       cy.wait(1000)
       cy.get(selectors.search).click()
       cy.wait(5000)
       cy.get(selectors.accountNumber).click()
      
    }

    createNewSubmission(){
        cy.get(selectors.newSubmission).click()
        cy.get(selectors.selectBW).click()

    }


}