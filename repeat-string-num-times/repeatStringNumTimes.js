
function repeatStringNumTimes(stringToBeRepeated, numberOfTimes) {
  if (numberOfTimes < 1)
    return '';

  let repeatedString = '';
  while (numberOfTimes > 0) {
    numberOfTimes--;
    repeatedString = repeatedString.concat(stringToBeRepeated);
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
