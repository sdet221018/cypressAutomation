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

    it("Checking CheckBoxes",()=> {
        cy.visit("https://example.cypress.io/commands/actions")

        // cy.log("Verification of Single Check Boxes Checking")
        // cy.log("===========================================")
        // Check Single Check Box
        // cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked')
        // cy.log("Verification of Single Check Box Completed")

        cy.log("Verification of Multiple Check Boxes Checking")
        cy.log("=============================================")
        // Check Multiple Check Boxes altogether
        // By default, .check() will check all
        // matching checkbox or radio elements in succession, one after another
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
          .check().should('be.checked')

        // .check() accepts an array of values
        cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .check(['checkbox1', 'checkbox2']).should('be.checked')

        cy.log("Verification of Multiple Check Boxes Completed")


        // Ignore error checking prior to checking
        cy.get('.action-checkboxes [disabled]')
          .check({ force: true }).should('be.checked')

    })

    it("Unchecking the Checkboxes", ()=> {
        cy.visit("https://example.cypress.io/commands/actions")

        // By default, .uncheck() will uncheck all matching
        // checkbox elements in succession, one after another
        cy.get('.action-check [type="checkbox"]')
          .not('[disabled]')
          .uncheck().should('not.be.checked')

        // .uncheck() accepts a value argument
        cy.get('.action-check [type="checkbox"]')
          .check('checkbox1')
          .uncheck('checkbox1').should('not.be.checked')

        // .uncheck() accepts an array of values
        cy.get('.action-check [type="checkbox"]')
          .check(['checkbox1', 'checkbox3'])
          .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')

        // Ignore error checking prior to unchecking
        cy.get('.action-check [disabled]')
          .uncheck({ force: true }).should('not.be.checked')
    })
})