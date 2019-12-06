
function getIndexToIns(inputArray, numberToBeInserted) {
  const sortedArray = inputArray.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  let indexToInsert = 0;
  let index = 0;
  for (index = 0; index < sortedArray.length; index += 1) {
    if (sortedArray[index] >= numberToBeInserted) {
      break;
    }
  }
  indexToInsert = index;

  return indexToInsert;
}

export {
  getIndexToIns,
};
