
function getIndexToIns(inputArray,numberToBeInserted) {
  var sortedArray = inputArray.sort((firstNumber,secondNumber) => firstNumber-secondNumber);
  var indexToInsert = 0;

  var index = 0;
  for( index=0;index<sortedArray.length;index++){
    if(sortedArray[index] >= numberToBeInserted){
      break;
    }
  }

  indexToInsert = index;

  return indexToInsert;
}

export {
  getIndexToIns,
};
