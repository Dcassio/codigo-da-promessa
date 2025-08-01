describe('Calculadora - Testes Básicos', () => {
  beforeEach(() => {
    cy.visit('https://testpages.herokuapp.com/styled/calculator')
  });

  it('Soma de 10 + 5 deve ser 15', () => {
    cy.get('#number1').type('10')
    cy.get('#number2').type('5')
    cy.get('#calculate').click()
    cy.get('#answer').should('have.text', '15')
  });

  it('Divisão por zero deve mostrar erro ou resultado', () => {
    cy.get('#number1').type('10')
    cy.get('#number2').type('0')
    cy.get('#calculate').click()
    cy.get('#answer').should('exist') // Adapte conforme o comportamento do sistema
  });
});