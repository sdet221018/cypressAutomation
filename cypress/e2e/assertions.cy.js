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

describe("Assertions Demo4", () => {
    it("Explicit Assertions", () => {

        cy.log("4rth Usage of Assertions: expect and assess")
        cy.log("=========================================")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // BDD and TDD Style Assertions using a further optimization of the methods
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then( (x)=> {

            let actName = x.text();

            //BDD Style
           expect(actName).to.equal(expName);
            // expect(actName).to.not.equal(expName);

            //TDD Style
            assert.equal(actName, expName);
            // assert.notEqual(actName, expName);

        })

        cy.log("4rth Usage of Assertions: Completed")

    })
})