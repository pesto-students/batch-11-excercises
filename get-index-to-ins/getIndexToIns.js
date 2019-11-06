function sortCondition(a, b) {
  return a - b;
}

function getIndexToIns(numberArray, valueToInsert) {
  const sortedArray = numberArray.sort(sortCondition);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] >= valueToInsert) {
      return i;
    }
  }
  return sortedArray.length;
}

export {
  getIndexToIns,
};
