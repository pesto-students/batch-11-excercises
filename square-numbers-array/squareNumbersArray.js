
function squareNumbersArray(numbers) {
  // eslint-disable-next-line no-restricted-globals
  if (numbers.filter((i) => isNaN(i)).length > 0) {
    throw new Error('Every element in the array must be a number.');
  }
  return numbers.map((number) => number ** 2);
}

export {
  squareNumbersArray,
};
