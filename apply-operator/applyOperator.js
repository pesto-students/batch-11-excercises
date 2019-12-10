
function applyOperator(operator, ...numberArray) {
  let finalAnswer = 0;

  if (operator === undefined) {
    throw new Error('Please specify any of the operators : +, -, *, /, %');
  }

  if (numberArray.length === 0) return 0;

  if (numberArray.length === 1 && operator !== '-') return numberArray[0];

  switch (operator) {
    case '+':
      finalAnswer = numberArray.reduce((x, y) => x + y, 0);
      break;
    case '-':
      finalAnswer = numberArray.reduce((x, y) => x - y, 0);
      break;
    case '*':
      finalAnswer = numberArray.reduce((x, y) => x * y, 1);
      break;
    case '/':
      finalAnswer = Number(numberArray.reduce((x, y) => x / y, 1).toFixed(4));
      break;
    case '%':
      finalAnswer = numberArray.reduce((x, y) => x % y, 1);
      break;
    default:
      return false;
  }
  return finalAnswer;
}

export {
  applyOperator,
};
