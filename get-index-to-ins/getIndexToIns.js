
function getIndexToIns(inputArray, elementToInsert) {
  inputArray.sort((firstElement, secondElement) => firstElement - secondElement);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= elementToInsert)
      return i;
  }
  return inputArray.length;
}

export {
  getIndexToIns,
};
