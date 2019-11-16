
function sumEvenArgs(...numbers) {
  const isEven = num => num % 2 === 0;
  const sumEvenNumbers = (sum, number) => sum + number;
  return numbers.filter(isEven).reduce(sumEvenNumbers, 0);
}

export {
  sumEvenArgs,
};
