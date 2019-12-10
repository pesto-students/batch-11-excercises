const calculateDifference = (string) => {
  const alternateString = [];
  for (const char of string) {
    if (alternateString[0] !== char) {
      alternateString.unshift(char);
    }
  }
  const characterDifference = string.length - alternateString.length;
  return characterDifference;
};

function alternatingCharacters(listOfStrings) {
  const listOfDifference = listOfStrings.map(calculateDifference);
  return listOfDifference;
}

export {
  alternatingCharacters,
};
