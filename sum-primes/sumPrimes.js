function isPrime(value) {
  if (value === 1) {
    return false;
  }
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}
function sumPrimes(number) {
  let sum = 0;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export { sumPrimes };
