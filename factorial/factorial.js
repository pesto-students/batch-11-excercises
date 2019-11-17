
function factorial(integer) {
  if (integer === 0) {
    return 1;
  } else {
    let factorialOfInteger = 1;
    while (integer > 0) {
      factorialOfInteger = factorialOfInteger * integer;
      integer--;
    }
    return factorialOfInteger;
  }
}

export {
  factorial,
};
