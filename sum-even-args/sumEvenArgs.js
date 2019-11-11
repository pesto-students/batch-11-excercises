
function sumEvenArgs(args) {
  const numbers = [...arguments];
  const evenNumbers = numbers.filter(isEven);
  const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr, 0);
  return sumOfEvenNumbers;
}

function isEven(number) {
  return number % 2 === 0;
}
export {
  sumEvenArgs,
};
