
function factorial(...args) {
  if (args[0] === 0)
    return 1;
  var factorialResult = 1;
  for (let i = 1; i <= args[0]; i++) {
    factorialResult = factorialResult * i;
  }
  return factorialResult;
}

export {
  factorial,
};
