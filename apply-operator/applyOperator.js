function applyOperator(...args) {

  const operator = args[0];
  args.shift();
  let result = 0;
  if (operator === undefined) {
    throw new Error('Error');
  }
  if (args.length !== 0) {
    switch (operator) {
      case '+':
        result = 0;
        for (let i = 0; i < args.length; i++) {
          result = result + args[i];
        }
        break;
      case '-':
        result = 0;
        for (let i = 0; i < args.length; i++) {
          result = result - args[i];
        }
        break;
      case '*':
        result = 1;
        for (let i = 0; i < args.length; i++) {
          result = result * args[i];
        }
        break;
      case '/':
        result = 1;
        for (let i = 0; i < args.length; i++) {
          result = result / args[i];
        }
        result = parseFloat(result.toFixed(4))
        break;
      case '%':
        result = args[0];
        for (let i = 1; i < args.length; i++) {
          result = result % args[i];
        }
        result = parseFloat(result.toFixed(4))
        break;
      default:
        return result;
    }
  }
  return result;
}

export {
  applyOperator,
};
