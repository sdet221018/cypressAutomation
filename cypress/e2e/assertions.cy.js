describe("Assertions Demo1", () => {
    it("Implicit Assertions", () => {

        cy.log("1st Usage of Assertions: should and usage")
        cy.log("==========================================")
        // should and usage using basic methods
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should('include', 'opensource-demo')
        cy.url().should('contain', 'orangehrmlive')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/')
        cy.log("1st Usage of Assertions: Completed")

        // cy.wait(5000)

        // cy.log("2nd Usage of Assertions: should and usage")
        // cy.log("=========================================")
        // cy.visit("https://www.rightmove.co.uk/")
        // // should and usage using a little optimization of the methods
        // cy.url().should('include', 'rightmove')
        // .should('not.include', 'salesforce')
        // .should('eq', 'https://www.rightmove.co.uk/')
        // .should('contain', 'https')
        // cy.log("2nd Usage of Assertions: Completed")

        // cy.wait(5000)

        // cy.log("3rd Usage of Assertions: should and usage")
        // cy.log("=========================================")
        // cy.visit("https://trailhead.salesforce.com/en/trailblazercommunity")
        // // should and usage using a further optimization of the methods
        // cy.url().should('include', 'trail')
        // .and('include', 'salesforce')
        // .and('eq', 'https://trailhead.salesforce.com/en/trailblazercommunity')
        // .and('contain', 'https')
        // cy.log("3rd Usage of Assertions: Completed")

    })
})

describe("Assertions Demo2", () => {
    it("Implicit Assertions", () => {

        cy.log("2nd Usage of Assertions: should and usage")
        cy.log("=========================================")
        cy.visit("https://www.rightmove.co.uk/")
        // should and usage using a little optimization of the methods
        cy.url().should('include', 'rightmove')
        .should('not.include', 'salesforce')
        .should('eq', 'https://www.rightmove.co.uk/')
        .should('contain', 'https')
        cy.log("2nd Usage of Assertions: Completed")

    })
})

describe("Assertions Demo3", () => {
    it("Implicit Assertions", () => {

        cy.log("3rd Usage of Assertions: should and usage")
        cy.log("=========================================")
        cy.visit("https://trailhead.salesforce.com/en/trailblazercommunity")
        // should and usage using a further optimization of the methods
        cy.url().should('include', 'trail')
        .and('include', 'salesforce')
        .and('eq', 'https://trailhead.salesforce.com/en/trailblazercommunity')
        .and('contain', 'https')
        cy.log("3rd Usage of Assertions: Completed")

    })
})