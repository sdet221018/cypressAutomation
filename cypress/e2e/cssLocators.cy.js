// This cypress instruction can be removed if there is a reference for the Cypress '/// <reference types = "Cypress" />' in the \support\commands.js file
// const cypress = require('cypress') 

// CSS Selector
// tag id:                  tag#id
// tag class:               tag.class
// tag attribute:           tag[attribute='value']
// tag class attribute:     tag.class[attribute='value']

describe('cssLocators', function() {
    it.only('cssLocators', () => {
        // cy.visit('https://trailhead.salesforce.com/')
        // let searchString = 'Salesforce'
        cy.visit('https://www.amazon.co.uk/')
        const searchString = "T-Shirts"
        // cy.clearAllCookies()

        cy.log('Search String: ' + '${searchString}')

        cy.wait(10000)

        // cy.get("input#twotabsearchtextbox").type('T-Shirts') // tag#id: id of tag and tag is optional
       cy.get("input[name='field-keywords']").type('T-Shirts') // tag.class[attribute='value']

       cy.get("input.nav-input[type='submit']").click() // 
        
       cy.get("span.a-color-state.a-text-bold").contains("T-Shirts") // Assertion using tag.class

    })
})