
function sumEvenArgs(...args) {
  const isEven = (element) => element % 2 === 0;
  const add = (sum, element) => {
    let currentTotal = sum;
    currentTotal += element;
    return currentTotal;
  };
  // const add = (sum, element) => sum += element;
  // Arrow function should not return assigment,
  // what is the correct fix?
  return args.filter(isEven).reduce(add, 0);
}

export {
  sumEvenArgs,
};
