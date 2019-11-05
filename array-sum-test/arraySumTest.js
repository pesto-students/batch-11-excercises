
function arraySumTest(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = args[i] + sum;
  }
  return sum;
}

export {
  arraySumTest,
};
