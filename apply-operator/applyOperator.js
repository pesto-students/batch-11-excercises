
function applyOperator(operator, ...operands) {
  if (!operator) throw new Error("Operator not specified. Possible values '+', '-', '*', '/', '%'");
  if (!operands) return 0;

  switch (operator) {
    case '+':
      return operands.reduce((result, element) => result + element, 0);
    case '-':
      return operands.reduce((result, element) => result - element, 0);
    case '*':
      return operands.reduce((result, element) => result * element, 1);
    case '/': {
      const highDecimalPlaces = operands.reduce((result, element) => result / element, 1);
      const precisionOfTwo = Number.parseFloat(Number.parseFloat(highDecimalPlaces).toPrecision(2));
      return precisionOfTwo;
    }
    case '%':
      return operands.reduce((result, element) => result % element);
    default:
      throw new Error("Invalid operator specified. Possible values '+', '-', '*', '/', '%'");
  }
}

export {
  applyOperator,
};
