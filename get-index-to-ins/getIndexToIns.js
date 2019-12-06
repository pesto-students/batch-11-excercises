
function getIndexToIns(array, numberToInsert) {
  array.sort((a, b) => a - b);
  for (var insertionIndex = 0; insertionIndex < array.length; insertionIndex++) {
    if (numberToInsert <= array[insertionIndex]) {
      return insertionIndex;
    }
  }
  return insertionIndex;
}

export {
  getIndexToIns,
};
