function getIndexToIns(unsortedArray, insertValue) {
  let sortedArray = unsortedArray.sort((firstItem, secondItem) => {
    return firstItem - secondItem;
  });
  let lengthOfArray = sortedArray.length;
  let indexValueofInsertion = 0;
  if (sortedArray[0] >= insertValue) {
    indexValueofInsertion = 0;
    return indexValueofInsertion;
  }
  if (sortedArray[lengthOfArray - 1] <= insertValue) {
    indexValueofInsertion = sortedArray.length;
    return indexValueofInsertion;
  }
  for (let i = 1; i < lengthOfArray; i++) {
    if (sortedArray[i] >= insertValue) {
      indexValueofInsertion = i;
      return i;
    }
  }
}

export { getIndexToIns };
