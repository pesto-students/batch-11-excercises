
function squareNumbersArray(numbers) {
  const squaredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      throw new Error('Every element in the array must be a number.');
    }
    squaredNumbers.push(numbers[i] ** 2);
  }
  return squaredNumbers;
}

export {
  squareNumbersArray,
};
