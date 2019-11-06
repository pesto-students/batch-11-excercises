function applyOperator(...args) {
  let result = 0;
  const passedArgs = [].concat(args);
  passedArgs.splice(0, 1);
  if (args[0] !== '+' && args[0] !== '-' && args[0] !== '/' && args[0] !== '%' && args[0] !== '%') {
    result = 0;
  } else {
    throw Error('Operator Is Not Specified');
  }
  switch (args[0]) {
    case '+':
      passedArgs.map((el) => {
        result += el;
        return null;
      });
      break;
    case '-':
      passedArgs.map((el) => {
        result -= el;
        return 0;
      });
      break;
    case '*':
      passedArgs.map((el, index) => {
        if (index === 0) {
          result = el;
        } else {
          result *= el;
        }
        return 0;
      });
      break;
    case '/':
      passedArgs.map((el, index) => {
        if (index === 0) {
          result = el;
        } else {
          result /= el;
        }
        return 0;
      });
      result = parseFloat(result.toFixed(4));
      break;
    case '%':
      passedArgs.map((el, index) => {
        if (index === 0) {
          result = el;
        } else {
          result /= el;
        }
        return 0;
      });
      result = Math.ceil(result);
      break;
    default:
      throw new Error('No Operator');
  }
  return result;
}
export {
  applyOperator,
};
