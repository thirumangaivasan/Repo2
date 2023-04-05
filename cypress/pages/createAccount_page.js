const selectors = require ("../Selectors/createAccountSelectors")


export class CreateAccountPage{

    createAccount(firstname, lastname){
       cy.get(selectors.Actions).click()
       cy.get(selectors.NewAccount).click() 
        cy.wait(5000)
       cy.get(selectors.firstName).type(firstname)
       cy.get(selectors.lastName).type(lastname)
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
// cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName > .gw-vw--value > .gw-noTrack')
// cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName > .gw-vw--value > .gw-noTrack')
// cy.get('#NewAccount-NewAccountScreen-NewAccountSearchResultsLV-0-AccountNumber_button')
// cy.get('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-6-addSubmission')
// cy.get('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission')

// policyinfo 
// cy.get('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission')
// cy.get('.gw-focus')