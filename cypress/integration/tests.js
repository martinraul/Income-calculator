const URL = "192.168.0.102:8080";

context('income calculator', () => {
    before(() => {
        cy.visit(URL);
    });
    it('makes sure there is a FORM', () => {
        cy.get('#form').find('.hidden');
    });
    it('makes sure RESET BUTTON is hidden', () => {
        cy.get('input#reset-button.hidden');
    });
    it('makes sure there is a EMPTY FIELDS WARNING', () => {
        cy.get('#calculate').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Annual Salary Required");
          })
    });
    it('makes sure CALCULATION works fine', () => {
        cy.get('#annualSalary')
            .type('10000').should('have.value', '10000')
        cy.get('#calculate').click()
        cy.get('#monthlySalary')
            .should('have.value', '$833.3333333333334')
        cy.get("#weeklySalary")
            .should("have.value","$192.30769230769232")
        cy.get("#dailySalary")
            .should("have.value", "$27.397260273972602")
    });
    it('makes sure RESET BUTTON button works', () => {
        cy.get('#reset-button').click();
        cy.get('#annualSalary')
            .should('have.value', '')
        cy.get('#calculate')
            .should("have.value", "")
        cy.get('#monthlySalary')
            .should('have.value', '')
        cy.get("#weeklySalary")
            .should("have.value","")
        cy.get("#dailySalary")
            .should("have.value", "")
    });
});