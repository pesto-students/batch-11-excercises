
function factorial(integer) {
  if (integer === 0 || integer === 1) {
    return 1;
  }
  const factorialOfInteger = integer * factorial(integer - 1);
  return factorialOfInteger;
}

export {
  factorial,
};
