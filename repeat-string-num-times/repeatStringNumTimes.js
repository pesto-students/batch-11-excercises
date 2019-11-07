
function repeatStringNumTimes(inputString, repeatCount) {
  var repeatedString = '';

  if (repeatCount > 0) {
    for(var i=0;i<repeatCount;i++){
      repeatedString = repeatedString + inputString;
    }
  }

  return repeatedString;
}

export {
  repeatStringNumTimes,
};
