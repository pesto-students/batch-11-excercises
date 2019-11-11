
function sumEvenArgs(...args) {
  const isEven = (element) => element % 2 === 0;
  const add = (partialSum, element) => partialSum + element;
  return args.filter(isEven).reduce(add, 0);
}

export {
  sumEvenArgs,
};
