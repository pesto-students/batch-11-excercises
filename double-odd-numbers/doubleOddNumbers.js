
function doubleOddNumbers(numbers) {
  const doubledOddNumbers = numbers.filter((number) => number % 2 === 1)
    .map((oddNumber) => oddNumber * 2);
  return doubledOddNumbers;
}

export {
  doubleOddNumbers,
};
