
function getIndexToIns(numbersArray, valueToBeInserted) {
  let insertionIndex = -1;

  if (numbersArray.includes(valueToBeInserted)) return numbersArray.indexOf(valueToBeInserted);
  for (let i = 0; i < numbersArray.length; i += 1) {
    if ((numbersArray[i] < valueToBeInserted && numbersArray[i + 1] > valueToBeInserted)
          || numbersArray[i] < valueToBeInserted) {
      insertionIndex = i + 1;
    }
  }
  return insertionIndex;
}

export {
  getIndexToIns,
};
