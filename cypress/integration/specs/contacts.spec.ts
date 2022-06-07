import { SalesPage } from "../../page/sales.page"
import { LoginPage } from "../../page/login.page"
import { CustomerPage } from "../../page/customer.page"
import { ContactPage } from "../../page/contacts.page"
import { CommonPage } from "../../page/common.page"


describe('Customer Contact Test', () => {
    const loginpage = new LoginPage();
    const customerpage = new CustomerPage();
    const contactpage = new ContactPage();
    const commonpage = new CommonPage();

    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/sales')
        })

    it('verify customer contact page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
    })

    it('verify add new customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.clickAddNewCustomer()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/customer');
        customerpage.enterCustomerDetails('Michael','Scott','Dunder Mifflin','abcxyzpqr@nbc.com','2313')
        customerpage.closeCustomerCard()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/contacts/customers');
        commonpage.verifyCorrectName('Michael','Michael Scott')
    })

    it('verify update existing customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.openCustomerExistingDetails('Michael')
        commonpage.verifyCorrectURLPath('https://factory.katanamrp.com/customer')
        customerpage.updateCustomerDetails('Dwight','Schrute','Dwight Schrute')
        customerpage.closeCustomerCard()  
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/contacts/customers')
        commonpage.verifyCorrectName('Dwight','Dwight Schrute')
    })

    it('verify delete existing customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.openCustomerExistingDetails('Michael')
        commonpage.verifyCorrectURLPath('https://factory.katanamrp.com/customer')
        customerpage.deleteDetails()
        commonpage.verifyNavigateToCorrectURL('https://factory.katanamrp.com/contacts/customers')
    })
})
