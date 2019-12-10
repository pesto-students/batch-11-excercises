function checkPrimeNumber(numbertoCheck) {
  for (let i = 2; i < numbertoCheck; i += 1) {
    if (numbertoCheck % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(numberRange) {
  let primeAddition = 0;

  for (let i = 2; i <= numberRange; i += 1) {
    if (checkPrimeNumber(i)) {
      primeAddition += i;
    }
  }

  return primeAddition;
}

export { sumPrimes };
