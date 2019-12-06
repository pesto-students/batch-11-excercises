function repeatStringNumTimes(string, number) {
  let repeatedString = '';
  let times = number;
  while (times > 0) {
    repeatedString += string;
    times -= 1;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
