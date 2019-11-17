
function applyOperator(operator, ...operands) {
  if (operator === undefined) {
    throw new Error('Operator is not provided. Please provide +, -, *, / or %');
  }
  if (operands.length === 0) {
    return 0;
  }

  switch (operator) {
    case '+':
      return operands.reduce((acc, operand) => acc + operand, 0);
      break;
    case '-':
      return operands.reduce((acc, operand) => acc - operand, 0);
      break;
    case '*':
      return operands.reduce((acc, operand) => acc * operand, 1);
      break;
    case '/':
      return operands.reduce((acc, operand) => acc / operand, 1);
      break;
    case '%':
      return operands.reduce((acc, operand) => acc % operand);
      break;
  }
}


export {
  applyOperator,
};
