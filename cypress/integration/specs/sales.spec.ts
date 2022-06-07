import { SalesPage } from "../../page/sales.page"
import { LoginPage } from "../../page/login.page"
import { CommonPage } from "../../page/common.page"

describe('Sales Test',() => {

    const salespage = new SalesPage();
    const loginpage = new LoginPage();
    const commonpage = new CommonPage();


    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/sales')
    })

    it('verify that user navigates to customer page when clicking add customer using global add', ()=> {
        salespage.addCustomer();
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/customer')
    })

})