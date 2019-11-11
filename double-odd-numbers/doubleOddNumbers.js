
function doubleOddNumbers(numbers) {
  const doubledOddNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      doubledOddNumbers.push(number * 2);
    }
  });
  return doubledOddNumbers;
}

export {
  doubleOddNumbers,
};
