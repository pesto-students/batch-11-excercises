
function placeInMiddle(firstArray, secondArray) {
  let resultArray = [];
  if (firstArray.length === 0) {
    return secondArray;
  }
  const indexToBeInserted = firstArray.length / 2;
  resultArray = firstArray.slice(0, indexToBeInserted).concat(secondArray).concat(firstArray.splice(indexToBeInserted, firstArray.length));
  return resultArray;
}

export {
  placeInMiddle,
};
