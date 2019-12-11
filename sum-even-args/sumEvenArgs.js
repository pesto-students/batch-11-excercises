
function sumEvenArgs(...numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const sumOfNumbers = evenNumbers.reduce((summedUp, currentNumber) => summedUp + currentNumber, 0);
  return sumOfNumbers;
}

export {
  sumEvenArgs,
};
