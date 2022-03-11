/// <reference types="cypress" />
let createdId;

describe(`API PUT request Test Suit`, function () {

    beforeEach(function () {

        cy.request({
            method: "POST",
            auth: {
                username: "radTesting",
                password: "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"
            },
            url: "user/repos",
            body:{
                "name": "new-repo-test"
            }
        })

        .then(function (response) {
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", "new-repo-test");
        })

        .then(function(response) {
            createdId = response.body.id;
        })
    });

    it(`TC001 Validate that the PATCH requests returns updated record and correct response`, function () {
        cy.request({
            method: "PATCH",
            url: "repos/radTesting/new-repo-test",
            auth: {
                username: "radTesting",
                password: "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"
            },
            body: {
                "name": "updated-repo-test"  
            }
        })

        .then(function(response) {
                expect(response.status).to.eq(200);
                expect(response.body).has.property("name", "updated-repo-test");
        })

        deleteRepo("updated-repo-test");
    })

    it(`API-02-Validating restrictions on changing "Id" field`, function(){
        cy.request({
            method: "PATCH",
            url: "repos/radTesting/new-repo-test",
            auth: {
                username: "radTesting",
                password: "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"
            },
            body: {
                "id": 123  
            }
        })

        .then(function(response) {
                expect(response.status).to.eq(200);
                expect(response.body).has.property("id", createdId);
        })

        deleteRepo("new-repo-test");
    })




})

function deleteRepo(repoName) {
    cy.request({
        method: "DELETE",
        url: "repos/radTesting/" + repoName,
        auth: {
            username: "radTesting",
            password: "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"
        }
    })

    .then(function (response) {
        expect(response.status).to.eq(204);
    })
}