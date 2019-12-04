function sumPrimes(num) {
  let prime = 0;
  function isPrime(val) {
    for (let j = 2; j < val; j += 1) {
      if (val % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      prime += i;
    }
  }


  return prime;
}

export {
  sumPrimes,
};
