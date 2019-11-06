
function applyOperator(...args) {
  let ans;
  const [operator, ...operands] = args;
  if (operator === undefined) {
    throw new Error();
  }
  if (operands.length === 0) return 0;
  if (operands.length === 1 && operator !== '-') return operands[0];

  if (operator === '*') ans = operands.reduce((a, b) => a * b, 1);
  if (operator === '/') ans = Number.parseFloat(operands.reduce((a, b) => a / b, 1).toFixed(4));
  if (operator === '+') ans = operands.reduce((a, b) => a + b, 0);
  if (operator === '-') ans = operands.reduce((a, b) => a - b, 0);
  if (operator === '%') ans = operands.reduce((a, b) => a % b, 1);

  return ans;
}

export {
  applyOperator,
};
