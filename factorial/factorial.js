
function factorial(number) {
  let factorialValue = 1;
  let i = 1;
  while (i <= number) {
    factorialValue *= i;
    i += 1;
  }
  return factorialValue;
}

export {
  factorial,
};
