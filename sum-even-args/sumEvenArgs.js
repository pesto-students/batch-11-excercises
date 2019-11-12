
function sumEvenArgs(...numbers) {
  const isEvenNumber = (number) => number % 2 === 0;
  const evenNumbers = numbers.filter(isEvenNumber);
  const sumOfEvenNumbers = evenNumbers.reduce((acc, number) => acc + number, 0);
  return sumOfEvenNumbers;
}

export {
  sumEvenArgs,
};
