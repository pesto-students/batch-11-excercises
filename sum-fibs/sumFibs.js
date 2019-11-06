
function sumFibs(givenInteger) {
  let sumOfOddFibonacciNumbersTillGivenInteger = 1;

  const calculateFibonacciSum = function calculateFibonacciSum() {
    let first = 0;
    let second = 1;
    let current = 1;
    for (let i = 2; i <= givenInteger; i += 1) {
      current = first + second;
      first = second;
      second = current;
      if ((current < givenInteger) && (current % 2 === 1)) {
        sumOfOddFibonacciNumbersTillGivenInteger += current;
      }
    }
  };

  calculateFibonacciSum();
  return sumOfOddFibonacciNumbersTillGivenInteger;
}

export {
  sumFibs,
};
