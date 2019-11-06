
function factorial(...args) {
  let fact = 1;
  let i = 1;
  while (i <= args) {
    fact *= i;
    i += 1;
  }
  return fact;
}

export {
  factorial,
};
