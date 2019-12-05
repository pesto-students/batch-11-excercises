const applyOperator = (...args) => {
  const validOperator = ['+', '-', '*', '/', '%'];
  const operator = args[0];
  if (!validOperator.includes(operator)) {
    throw new Error('Not a valid operator');
  }
  args.shift();
  const list = [...args];
  if (list.length === 0) {
    return 0;
  }
  switch (operator) {
    case '+':
      return list.reduce((acc, val) => acc + val);

    case '-':
      return list.map((i) => -i).reduce((acc, val) => acc + val);

    case '*':
      return list.reduce((acc, val) => acc * val);

    case '/':
      return +list.reduce((acc, val) => acc / val).toFixed(4);

    case '%':
      return list.reduce((acc, val) => acc % val);
    default:
      throw new Error('No operator is provided');
  }
};

// console.log(applyOperator('/', 1, 2, 3, 4, 5));
export { applyOperator };
