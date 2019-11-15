/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
function isPrime(num) {
  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
}

function getPrimeList(number) {
  let numberCopy = number;
  const listOfPrimes = [];
  while (numberCopy >= 2) {
    if (isPrime(numberCopy)) listOfPrimes.push(Number(numberCopy));
    numberCopy -= 1;
  }
  return listOfPrimes;
}


function sumPrimes(range) {
  const sumOfPrimeNumbers = getPrimeList(range)
                                        .reduce((currentValue, accumulator) =>
                                                    currentValue + accumulator, 0);
  return sumOfPrimeNumbers;
}

export {
  sumPrimes,
};
