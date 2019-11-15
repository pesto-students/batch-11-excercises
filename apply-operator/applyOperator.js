
function applyOperator(operator, ...operands) {
  let answer;
  if (operator === undefined) {
    throw new Error('Please specify one of the mentioned operators : +, -, *, /, %');
  }
  if (operands.length === 0) return 0;
  if (operands.length === 1 && operator !== '-') return operands[0];

  if (operator === '*') answer = operands.reduce((a, b) => a * b, 1);
  if (operator === '/') answer = Number.parseFloat(operands.reduce((a, b) => a / b, 1).toFixed(4));
  if (operator === '+') answer = operands.reduce((a, b) => a + b, 0);
  if (operator === '-') answer = operands.reduce((a, b) => a - b, 0);
  if (operator === '%') answer = operands.reduce((a, b) => a % b, 1);

  return answer;
}

export {
  applyOperator,
};
