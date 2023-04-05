/// <reference types="cypress"/>

import { LoginPage } from "../pages/login_page"
import { CreateAccountPage } from "../pages/createAccount_page"

const loginPC = new LoginPage()
const createAccount = new CreateAccountPage()

describe('CreateAccount', () => {
  
    it('CreateAccount', () => {
    cy.fixture('login.json').then((data)  => {
    loginPC.loginPolicyCenter(data.username, data.password)
    cy.wait(5000)
    createAccount.createAccount(data.firstname, data.lastname)
    cy.wait(5000)
    createAccount.createNewSubmission()
})

  }) 
  
})