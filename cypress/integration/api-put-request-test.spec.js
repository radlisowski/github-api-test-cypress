/// <reference types="cypress" />
let createdBoardId;
var todaysDate = new Date();
var dd = String(todaysDate.getDate()).padStart(2, '0');
var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todaysDate.getFullYear();

todaysDate = yyyy + '-' + mm + '-' + dd;

describe(`API PUT request Test Suit`, function () {

    beforeEach(function () {
        cy.request({
            method: "POST",
            url: "/Boards/",
            body: {
                "name": "test board",
                "user": 0,
                "starred": false,
                "created": todaysDate
            }
        }).then(function (response) {
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", "test board");
            expect(response.body).has.property("user", 0);
            expect(response.body).has.property("starred", false);
            expect(response.body).has.property("created", todaysDate);
        }).then(function (response) {
            createdBoardId = response.body.id;
        });
    });

    it(`API01-Validate that the PUT request is returningcorrect response and data`, function () {
        cy.request({
            method: "PUT",
            url: `/Boards/${createdBoardId}`,
            body: {
                "name": "new test board",
                "user": 1,
                "starred": true,
                "created": todaysDate
            }
        }).then(function(response) {
            expect(response.status).to.eq(200);
            expect(response.body).has.property("name", "new test board");
            expect(response.body).has.property("user", 1);
            expect(response.body).has.property("starred", true);
            expect(response.body).has.property("created", todaysDate);
        })
    })

    it(`API02 `)




})