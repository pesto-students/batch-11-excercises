function calcSum(operands) {
  let sum = 0;
  for (let i = 0; i < operands.length; i += 1) {
    sum += operands[i];
  }
  return sum;
}

function calcDiff(operands) {
  return -1 * calcSum(operands);
}

function calcProd(operands) {
  let product = 1;
  for (let i = 0; i < operands.length; i += 1) {
    product *= operands[i];
  }
  return product;
}

function calcDiv(operands) {
  const result = 1 / calcProd(operands);
  return parseFloat(result.toPrecision(2));
}

function calcMod(operands) {
  let mod = operands[0];
  for (let i = 1; i < operands.length; i += 1) {
    mod %= operands[i];
  }
  return mod;
}

function applyOperator(operator, ...operands) {
  const operators = ['+', '-', '*', '/', '%'];
  if ((!operator) || (operator in operators)) {
    throw new Error('No/Invalid operator specified. Try "+", "-", "*", "/" or "%"');
  }

  if (operands.length === 0) {
    return 0;
  }

  if (operands.filter((operand) => typeof operand !== 'number').length > 0) {
    throw new Error('Non-number operand received. Please verify.');
  }

  if (operands.length === 1) {
    if (operator === '-') {
      return -1 * operands[0];
    }
    return operands[0];
  }
  if (operator === '+') {
    return calcSum(operands);
  }
  if (operator === '-') {
    return calcDiff(operands);
  }
  if (operator === '*') {
    return calcProd(operands);
  }
  if (operator === '/') {
    return calcDiv(operands);
  }
  if (operator === '%') {
    return calcMod(operands);
  }
  return operands;
}

export {
  applyOperator,
};
