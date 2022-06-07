import { LoginPage } from "../../page/login.page"
import { CommonPage } from "../../page/common.page"

describe('Login test',() => {

    const loginpage = new LoginPage();
    const commonpage = new CommonPage();

    it('verify user should login correctly',() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/sales')
    })

})