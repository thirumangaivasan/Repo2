/// <reference types="cypress"/>

import { LoginPage } from "../pages/login_page"
const loginPC = new LoginPage()

describe('Login Policy Center', () => {
  it('Launch PC', () => {
   //cy.visit('http://in-pnq-coe31:5180/pc/PolicyCenter.do')
cy.fixture('login.json').then((data)  => {
  loginPC.loginPolicyCenter(data.username, data.password)
})

    //loginPC.loginPolicyCenter('su', 'gw')
  })
  
})