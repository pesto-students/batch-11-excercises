
function sumPrimes(integer) {
  function isPrime(maybePrime) {
    const divisors = [];
    for (let i = 1; i <= maybePrime; i += 1) {
      if (maybePrime % i === 0) {
        divisors.push(i);
      }
    }
    return divisors.length === 2;
  }

  const listOfPrimesTillGivenInteger = [];
  for (let i = 1; i <= integer; i += 1) {
    if (isPrime(i)) {
      listOfPrimesTillGivenInteger.push(i);
    }
  }

  const sum = listOfPrimesTillGivenInteger.reduce((result, current) => result + current);
  return sum;
}

export {
  sumPrimes,
};
