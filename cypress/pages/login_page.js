// import { Enter_Login } from "../Selectors/loginselectors"
// import { Enter_Login } from "../Selectors/loginselectors"
const selectors = require ("../Selectors/loginselectors")


export class LoginPage{

    //username_textbox = '#Login-LoginScreen-LoginDV-username > .gw-vw--value > .gw-noTrack',
//     password_textbox = '#Login-LoginScreen-LoginDV-password > .gw-vw--value > .gw-noTrack'
//    Enter_Login = '.gw-action--inner'
  
    loginPolicyCenter(username, password){
        cy.get(selectors.username_textbox).type(username)
        cy.get(selectors.password_textbox).type(password)
        cy.get(selectors.Enter_Login).click()
    }

}