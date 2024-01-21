// Hooks are from mocha
// Before or After each Test

/*
    Order:
    1 - before -> Executed once, as soon as the first TS is executed
    2 - beforeEach -> Executed before EACH TS is executed
    3 - testExecution
    4 - afterEach -> Executed after EACH TS is executed
    5 - after -> Executed once, as soon as the last TS is executed
*/

/// <reference types="cypress" />

describe('Hooks - Basic Demo', ()=>{

    before(function() {
        cy.log('Before Hook')
    })

    after(function() {
        cy.log('After Hook')        
    })

    beforeEach(function() {
        cy.log('BeforeEach Hook')
    })    

    afterEach(function() {
        cy.log('AfterEach Hook')
    })

    it("tc#1", ()=>{
        cy.log("Test Case #1");
    })    

    it.skip("tc#2", ()=>{
        cy.log("Test Case #2");
    })

    it("tc#3", ()=>{
        cy.log("Test Case #3");        
    })
})

describe ("Hooks - Realtime Demo for OrangeHRM", ()=>{
    before(function() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.log("Before Hook for the Realtime Demo")
    })

    after(function() {
        cy.log("After Hook for the Realtime Demo")
    })

    beforeEach(function() {
        cy.log("BeforeEach Hook for the Realtime Demo")
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    })
 
    afterEach(function() {
         cy.log("AfterEach Hook for the Realtime Demo")
         cy.get(".oxd-userdropdown-name").click()
         cy.get("ul[role='menu']").find('li').last().click()
         cy.wait(1000)
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it("Landing Page - URL Validation", function() {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it("Landing Page - Header Validation", function() {
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
          .should('be.visible')
          .and('have.text', 'Dashboard')
    })

    it("Landing Page - Footer Validation", function() {
        cy.get('.oxd-layout-footer')
          .find('p:first')
          .should('have.text', 'OrangeHRM OS 5.5')

        cy.get('.oxd-layout-footer')
          .find('p:last')
          .should('have.class','orangehrm-copyright')
    })

    // it("Landing Page - Sidepanel Validation", function() {
    //     cy.get('oxd-layout-navigation')
    //       .find('nav').should('have.class', 'oxd-sidepanel-nav')
    //     //        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("be.visible")
    //     // cy.get(".bm-burger-button").click()
    //     // cy.get("#inventory_sidebar_link").contains("")
    // })

})