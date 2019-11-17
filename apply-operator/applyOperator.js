function calcSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function calcDiff(arr) {
  return -1 * calcSum(arr);
}

function calcProd(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i += 1) {
    prod *= arr[i];
  }
  return prod;
}

function calcDiv(arr) {
  const result = 1 / calcProd(arr);
  return parseFloat(result.toPrecision(2));
}

function calcMod(arr) {
  let mod = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    mod %= arr[i];
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
