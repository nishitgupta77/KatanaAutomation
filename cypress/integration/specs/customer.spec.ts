import { SalesPage } from "../../page/sales.page"
import { LoginPage } from "../../page/login.page"
import { CustomerPage } from "../../page/customer.page"
import { CommonPage } from "../../page/common.page"


describe('Customer Test',() => {

    const salespage = new SalesPage();
    const loginpage = new LoginPage();
    const customerpage = new CustomerPage();
    const commonpage = new CommonPage();

    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin();
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/sales')
        salespage.addCustomer();
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/customer')
    })

    it('verify that cusomer gets display name correctly displayed', ()=> {        
        customerpage.inputFirstName('Nishit')
        customerpage.inputLastName('Gupta')
        customerpage.verifyDisplayName('Nishit Gupta')
    })

    it('verify that all customer details are saved', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyzpqr@fb.com','2387')
        customerpage.verifyChangesSaved()
    })

    it('verify that customer can add billing address', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyzpqr@fb.com','2387')
        customerpage.enterBillingAddressDetails('Nishit','Gupta','address1','address2','Delhi','New Delhi','1223','India')
        customerpage.verifyChangesSaved()
    })

    it('verify that customer can delete user details', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyzpqr@fb.com','2387')
        customerpage.enterBillingAddressDetails('Nishit','Gupta','address1','address2','Delhi','New Delhi','1223','India')
        customerpage.verifyChangesSaved() 
        customerpage.deleteDetails()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/contacts/customers')
    })
})