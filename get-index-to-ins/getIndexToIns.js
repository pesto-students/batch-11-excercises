
function getIndexToIns(numberArray, numberToBeInserted) {
  if (!numberArray) {
    return -1;
  }
  numberArray.sort((number1, number2) => number1 - number2);
  let index = 0;
  while (numberArray[index] < numberToBeInserted) {
    // eslint-disable-next-line no-plusplus
    index += 1;
  }
  return index;
}

export {
  getIndexToIns,
};
