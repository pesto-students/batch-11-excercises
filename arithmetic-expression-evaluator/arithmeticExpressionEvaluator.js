const evalExpression = (numberString1, numberString2, operator) => {
  const number1 = Number(numberString1);
  const number2 = Number(numberString2);
  let result;
  if (operator === '*' || operator === '/') {
    result = operator === '*' ? number1 * number2 : number1 / number2;
  } else {
    result = operator === '+' ? number1 + number2 : number1 - number2;
  }
  return result.toString(10);
};

const handleExp = (expArray, operatorIdx) => expArray.reduce((evalArray, item, index) => {
  if (index === operatorIdx) {
    evalArray.splice(index - 1, 1);
    evalArray.push(evalExpression(expArray[index - 1], expArray[index + 1], item));
  } else if (index !== operatorIdx + 1) {
    evalArray.push(item);
  }
  return evalArray;
}, []);

const handleOperation = (expArray, operator) => {
  const operatorIndex = expArray.indexOf(operator);
  if (operatorIndex >= 0) {
    return handleOperation(handleExp(expArray, operatorIndex), operator);
  }
  return expArray;
};

const validateExp = (expString) => {
  if (expString.includes('(') || expString.includes(')')) {
    throw new Error('Invalid input: parenthesis are forbidden');
  }
  if (expString.includes('^')) {
    throw new Error('Invalid input: exponent is forbidden');
  }
  if (expString.includes('.')) {
    throw new Error('Invalid input: floating point numbers are forbidden');
  }
};

function arithmeticExpressionEvaluator(expString) {
  validateExp(expString);
  const expArray = expString.split(/\s+/g);
  const evaluatedArray = ['/', '-', '+']
    .reduce((evalArray, operator) => handleOperation(evalArray, operator),
      handleOperation(expArray, '*'));
  return Number(evaluatedArray[0]);
}

export {
  arithmeticExpressionEvaluator,
};
