
function applyOperator(...args) {
  if (args.length === 0)
    throw Error("Arguments insufficient");
  else if (args.length === 1)
    return 0
  switch (args[0]) {
    case '+':
      return args.slice(1, args.length).reduce((total, currentVal) => total + currentVal, 0);
    case '-':
      return args.slice(1, args.length).reduce((total, currentVal) => total - currentVal, 0);
    case '*':
      return args.slice(1, args.length).reduce((total, currentVal) => total * currentVal, 1);
    case '/':
      return args.slice(1, args.length).reduce((total, currentVal) => total / currentVal, 1);
    case '%':
      if (args.length === 2) {
        return args[1];
      }
      return args.slice(1, args.length).reduce((total, currentVal) => total % currentVal, 1);
    default:
      throw Error("Unknown operator");
  }
}

export {
  applyOperator,
};
