import CalculatorPage from '../pageObjects/calculatorPage'

const scenarios = [
  { id: 'CT001', a: 10, op: 'Add', b: 5, expected: '15' },
  { id: 'CT002', a: 20, op: 'Subtract', b: 8, expected: '12' },
  { id: 'CT003', a: 4, op: 'Multiply', b: 3, expected: '12' },
  { id: 'CT004', a: 30, op: 'Divide', b: 5, expected: '6' },
  { id: 'CT005', a: 50, op: 'Divide', b: 0, expectedContains: 'Infinity' } // ou comportamento da página
];

describe('Regression Suite - Calculator', () => {
  const calc = new CalculatorPage();

  scenarios.forEach(s => {
    it(`${s.id} - ${s.a} ${s.op} ${s.b} => ${s.expected || s.expectedContains}`, () => {
      const result = calc.calculate(s.a, s.op, s.b);
      if (s.expected) {
        result.should('contain.text', s.expected);
      } else if (s.expectedContains) {
        result.should('contain.text', s.expectedContains);
      }
    });
  });
});

