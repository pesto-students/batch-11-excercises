
function factorial(number, accumulator = 1) {
  return number ? factorial(number - 1, number * accumulator) : accumulator;
}

export {
  factorial,
};
