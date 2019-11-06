
function sumFibs(number) {
  let firstFibonacciSequenceNumber = 1;
  let secondFibonacciSequenceNumber = 1;
  let sumOfOddFibonaccis = 0;
  sumOfOddFibonaccis += firstFibonacciSequenceNumber + secondFibonacciSequenceNumber;

  for (let i = 2; i < number; i++) {
    let latestFibonacciSequencenumber = firstFibonacciSequenceNumber + secondFibonacciSequenceNumber;
    firstFibonacciSequenceNumber = secondFibonacciSequenceNumber;
    secondFibonacciSequenceNumber = latestFibonacciSequencenumber;
    if (isOdd(latestFibonacciSequencenumber) && latestFibonacciSequencenumber <= number) {
      sumOfOddFibonaccis += latestFibonacciSequencenumber;
    }
  }
  return sumOfOddFibonaccis;
}

function isOdd(number) {
  return number % 2 !== 0;
}

export {
  sumFibs,
};
