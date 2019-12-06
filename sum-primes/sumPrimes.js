
function sumPrimes(number) {
  let result = 0;
  const isPrime = (val) => {
    for (let i = 2; i < val; i += 1) {
      if (val % i === 0 && val !== i) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}


export {
  sumPrimes,
};
