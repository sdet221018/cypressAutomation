/// <reference types="cypress" />

describe ("Check UI Element", ()=> {
    it("Checking Radio Buttons",()=> {
        cy.visit("https://www.southalltravel.co.uk/")

        cy.log("Verification of Journey Type Radio Buttons on Landing Page")
        cy.log("==========================================================")
        // Visibility of Radio Buttons
        cy.get("label[aria-label='returnWay']").should("be.visible")
        cy.get("label[aria-label='oneWay']").should("be.visible")
        cy.get("label[aria-label='multiway']").should("be.visible")
        cy.log("Verification of Journey Types Completed")

        cy.log("Verification of Return Way Journey Type Radio Button functionality")
        cy.log("==================================================================")
        // Selecting Radio Button Return Way
        cy.get("input#returnWay").check().should("be.checked")
        cy.get("input#oneWay").should("not.be.checked")
        cy.get("input#multiway").should("not.be.checked")
        cy.log("Verification of Return Way Journey Type Completed")

        cy.log("Verification of One Way Journey Type Radio Button functionality")
        cy.log("===============================================================")
        // Selecting Radio Button One Way
        // cy.get("input#oneWay").check({force: true}).should("be.checked")
        // cy.wait(1000)
        cy.get("input#oneWay").click({force: true}).should("be.checked")
        cy.get("input#returnWay").should("not.be.checked")
        cy.get("input#multiway").should("not.be.checked")
        cy.log("Verification of One Way Journey Type Completed")

        cy.log("Verification of Multi Way Journey Type Radio Button functionality")
        cy.log("=================================================================")
        // Selecting Radio Button Multi Way
        // cy.get("input#multiway").check({force: true}).should("be.checked")
        cy.wait(1000)
        cy.get("input#multiway").click({force: true}).should("be.checked")
        cy.get(".multi-city").should("be.visible")
        cy.log("Verification of Multi Way Journey Type Completed")
    })
})