describe('suite1', () => {
    it('test1 - Verify Title - Positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('test2 - Verify Title - Negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
    })
})

describe('suite2', function() {

})