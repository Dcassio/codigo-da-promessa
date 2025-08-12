class Calculator {
  visit() {
    cy.visit('https://testpages.herokuapp.com/styled/calculator')
  }

  enterFirstNumber(value) {
    cy.get('#number1').type(value)
  }

  enterSecondNumber(value) {
    cy.get('#number2').type(value)
  }

  clickAdd() {
    cy.get('#calculate').click()
  }

  verifyResult(expected) {
    cy.get('#answer').should('have.text', expected)
  }
}

export default Calculator