// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//-- This is a parent command --
 Cypress.Commands.add('login', () => { 
  cy.get('input[type="email"]').clear()
  .type('nishitgupta76@gmail.com')

  cy.get('input[type="password"]').clear()
  .type('ng1qaz!QAZ')

  cy.get('button[type="submit"]')
  .click();    
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', () => { 
//     cy.request({
//       method: 'POST',
//       url: 'https://katanamrp.com/login/',
//       body: {
//         user: {
//           email: 'nishitgupta76@gmail.com',
//           password: 'ng1qaz!QAZ',
//         }
//       }
//     })
//     .then((resp) => {
//       window.localStorage.setItem('client_id', resp.body.data.accessToken)
//     })

//   })

// Cypress.Commands.add('login', (Useremail, Userpwd, TMURL) => {
//     cy.request({
//       method: 'POST',
//       url: 'https://katanamrp.com/login/',
//       body: {
//         user: {
//           email: 'nishitgupta76@gmail.com',
//           password: 'ng1qaz!QAZ',
//         }
//       }
//     })
//       .its('body')
//       .then((body) => {
//         window.localStorage.setItem('client_id', body.data.accessToken);
//       })
//   });
  