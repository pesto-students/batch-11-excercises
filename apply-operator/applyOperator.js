
function applyOperator(...args) {
  const operator = args[0];
  const remainingVal = args.slice(1);

  if (args.length === 0) {
    throw new Error();
  }

  if (remainingVal.length === 0) {
    return 0;
  }

  switch (operator) {
    case '+':
      return remainingVal.reduce((accumulator, currentValue) => {
        const actualValue = parseInt(currentValue, 10);
        return accumulator + actualValue;
      });
    case '-':
      return remainingVal.reduce((accumulator, currentValue) => {
        const actualValue = parseInt(currentValue, 10);
        return accumulator - actualValue;
      }, 0);
    case '%':
      return remainingVal.reduce((accumulator, currentValue) => {
        const actualValue = parseInt(currentValue, 10);
        return accumulator % actualValue;
      });
    case '/':
      return parseFloat(remainingVal.reduce((accumulator, currentValue) => {
        const actualValue = parseInt(currentValue, 10);
        return accumulator / actualValue;
      }).toFixed(4));
    case '*':
      return remainingVal.reduce((accumulator, currentValue) => {
        const actualValue = parseInt(currentValue, 10);
        return accumulator * actualValue;
      });
    default:
      return 0;
  }
}

export {
  applyOperator,
};
