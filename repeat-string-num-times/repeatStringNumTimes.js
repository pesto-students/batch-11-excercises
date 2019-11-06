function repeatStringNumTimes(string, valueOfRepeatation) {
  let emptyString = '';
  if (valueOfRepeatation < 0) return emptyString;
  let repeatedString = string.repeat(valueOfRepeatation);
  return repeatedString;
}

export { repeatStringNumTimes };
