
function repeatStringNumTimes(string, times) {
  let i = 0;
  let repeatedString = '';
  if (times < 0) return repeatedString;
  while (i < times) {
    repeatedString += string;
    i += 1;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
