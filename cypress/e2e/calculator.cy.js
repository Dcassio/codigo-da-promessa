import Calculator from './pageObjects/calculatorPage.js'

describe('Teste da Calculadora', () => {
  it('Deve somar dois números', () => {
    const calc = new Calculator()
    calc.visit()
    calc.enterFirstNumber(5)
    calc.enterSecondNumber(3)
    calc.clickAdd()
    calc.verifyResult(8)
  })  
})