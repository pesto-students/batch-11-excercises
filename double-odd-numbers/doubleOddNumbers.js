
function doubleOddNumbers(numbers) {
  const doubleTheNumber = (number) => number * 2;
  const oddNumbers = numbers.filter((number) => number % 2 === 1);
  const doubledOddNumbers = Array.from(oddNumbers, doubleTheNumber);
  return doubledOddNumbers;
}

export {
  doubleOddNumbers,
};
