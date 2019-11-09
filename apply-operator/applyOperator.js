
function applyOperator(...args) {
  if (typeof args[0] !== 'string') throw new Error('Missing Operator: possible operators are +, -, *, /, %');
  else if (args.length === 1) return 0;
  else {
    const [operator, firstOperand, ...operands] = args;
    let result = firstOperand;
    for (const operand of operands) {
      result = eval(`${result} ${operator} ${operand}`);
    }
    return result % 1 !== 0 ? Number(result.toFixed(4)) : result;
  }
}

export {
  applyOperator,
};
