
function squareNumbersArray(numbers) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new Error('Each item should be of type number');
    } else if (numbers[i] !== (i + 1) * (i + 1)) {
      return false;
    }
  }
  return true;
}

export {
  squareNumbersArray,
};
