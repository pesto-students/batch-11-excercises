
function repeatStringNumTimes(stringToRepeat, frequency) {
  const EMPTY_STRING = '';
  if (frequency < 0) {
    return EMPTY_STRING;
  } else {
    let repeatedString = '';
    while (frequency > 0) {
      repeatedString += stringToRepeat;
      frequency--;
    }
    return repeatedString;
  }
}

export {
  repeatStringNumTimes,
};
