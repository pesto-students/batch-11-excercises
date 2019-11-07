
function repeatStringNumTimes(stringToRepeat, numberOfTimes) {
  if (numberOfTimes < 1) {
    return '';
  }
  const repeatedString = stringToRepeat.repeat(numberOfTimes);
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
