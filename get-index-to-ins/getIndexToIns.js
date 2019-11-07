
function getIndexToIns(numberArray, numberToBeInserted) {
  if (!numberArray) {
    return -1;
  }
  numberArray.sort((a, b) => a - b);
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
