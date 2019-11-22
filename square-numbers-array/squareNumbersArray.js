
function squareNumbersArray(numbers) {
  const squaredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new Error('Array cannot contain non numeric value!');
    }
    squaredNumbers.push(Math.pow(numbers[i], 2));
  }
  return squaredNumbers;
}

export {
  squareNumbersArray,
};
