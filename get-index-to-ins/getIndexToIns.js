
function getIndexToIns(numbersArray, valueToBeInserted) {
  let insertionIndex = -1;

  if (numbersArray.includes(valueToBeInserted)) return numbersArray.indexOf(valueToBeInserted);
  numbersArray.sort();
  for (let i = 0; i < numbersArray.length; i += 1) {
    if (numbersArray[i] > valueToBeInserted && numbersArray.indexOf(numbersArray[i - 1] !== 0)) {
      insertionIndex = i - 1;
    } else insertionIndex = i + 1;
  }
  return insertionIndex;
}

export {
  getIndexToIns,
};
