function applyOperator(operator, ...values) {
  if (operator === undefined) {
    throw new Error();
  }
  switch (operator) {
    case '+':
      return values.reduce((result, element) => result + element, 0);
    case '*':
      return values.reduce((result, element) => result * element, 1);
    case '-':
      return values.reduce((result, element) => result - element, 0);
    case '/':
      return parseFloat(values.reduce((result, element) => result / element, 1).toFixed(4));
    case '%':
      return values.reduce((result, element) => result % element);
    default:
      throw new Error('Invalid Operator');
  }
}

export {
  applyOperator,
};
