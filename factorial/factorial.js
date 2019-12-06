
function factorial(value) {
  let fact = 1;
  for (let i = 2; i <= value; i += 1) {
    fact *= i;
  }
  return fact;
}

export {
  factorial,
};
