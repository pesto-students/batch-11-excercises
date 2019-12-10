/* eslint-disable no-bitwise */
const validateInput = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Invalid Input');
  }
  const allowedOperators = ['!', '&', '|', '^', 'true', 'false'];
  if (!allowedOperators.some((operator) => operator === input)) {
    throw new Error('Invalid Input');
  }
};

const convertBoolToExpression = (expString) => {
  if (expString === 'true') return true;
  if (expString === 'false') return false;
  throw new Error('Input is neither true nor false');
};

const evalBool = (exp1, exp2, operator) => {
  switch (operator) {
    case '&':
      return Boolean(exp1 & exp2);
    case '|':
      return Boolean(exp1 | exp2);
    case '^':
      return Boolean(exp1 ^ exp2);
    default:
      throw new Error('Unknown Operator');
  }
};

const resolveNotOperator = (expressionArray) => expressionArray.map((expString) => {
  if (expString.includes('!')) {
    const exp = convertBoolToExpression(expString.substring(1));
    return String(!exp);
  }
  return expString;
});

function booleanExpressionEvaluator(expression) {
  let expressionArray = expression.split(' ');
  if (expressionArray.includes('!true') || expressionArray.includes('!false')) {
    expressionArray = resolveNotOperator(expressionArray);
  }
  if (expressionArray.length === 1) {
    return convertBoolToExpression(expressionArray[0]);
  }

  let i = 0;
  let result = convertBoolToExpression(expressionArray[1 - 1]);
  while (i < expressionArray.length - 1) {
    const operator = expressionArray[i];
    validateInput(operator);
    if (operator === '&' || operator === '|' || operator === '^') {
      const exp = convertBoolToExpression(expressionArray[i + 1]);
      result = evalBool(result, exp, operator);
    }
    i += 1;
  }
  return result;
}

export {
  booleanExpressionEvaluator,
};
