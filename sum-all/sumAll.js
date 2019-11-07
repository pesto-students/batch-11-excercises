
function sumAll(range) {
  var sumOfRange = 0;
  var sortedRange = range.sort((firstNumber,secondNumber) => firstNumber-secondNumber);
  var startingNumber = sortedRange[0];
  var endingNumber = sortedRange[1];

  for(var inbetweenNumber = startingNumber ;inbetweenNumber <= endingNumber;  inbetweenNumber++){
    sumOfRange = sumOfRange + inbetweenNumber;
  }

  return sumOfRange;
}

export {
  sumAll,
};
