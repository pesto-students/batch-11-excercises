
function squareNumbersArray(...maybeNumbersArray) {
  if (!maybeNumbersArray.every(Number)) {
    throw new Error('Unexpected element in array. An array with only numbers will be accepted, like - [1,2,3]');
  }

  // eslint-disable-next-line no-restricted-properties
  return maybeNumbersArray.map((element) => Math.pow(element, 2));
}

export {
  squareNumbersArray,
};
