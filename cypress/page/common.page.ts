export class CommonPage {
    public verifyNavigateToCorrectURL(url : string) {
        cy.url().should('be.equal',url)
     }
     public verifyCorrectURLPath(url : string) {
        cy.url().should('include',url)
     }
     public verifyCorrectName(text : string,value: string) {
        cy.contains(text).should('have.text',value)
     }
}