function primeFactorization(number) {
  let dividend = number;
  const factors = [];
  let divisor = 2;
  while (dividend > 1) {
    if (dividend % divisor === 0) {
      factors.push(divisor);
      dividend /= divisor;
    } else divisor += 1;
  }
  return factors;
}

function primalityTest(number) {
  const factors = primeFactorization(number);
  return factors.length === 1;
}

export {
  primalityTest,
};
