function isPrime(num) {
  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
}

function getPrimeList(number) {
  let num = number;
  const primes = [];
  while (num >= 2) {
    if (isPrime(num)) primes.push(Number(num));
    num -= 1;
  }
  return primes;
}


function sumPrimes(...args) {
  return getPrimeList(args).reduce((a, b) => a + b, 0);
}

export {
  sumPrimes,
};
