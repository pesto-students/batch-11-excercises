
function repeatStringNumTimes(...args) {
  let repeatedString = '';
  const [stringToBeRepeated, num] = args;
  for (let i = 0; i < num; i++) {
    repeatedString += stringToBeRepeated;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
