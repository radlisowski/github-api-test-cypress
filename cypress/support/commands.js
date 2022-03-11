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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let todaysDate;
let dd;
let mm;
let yyyy;

Cypress.Commands.add('getCurrentDate', function() {
    todaysDate = new Date();
    dd = String(todaysDate.getDate()).padStart(2, '0');
    mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = todaysDate.getFullYear();
    return todaysDate = yyyy + '-' + mm + '-' + dd;
});