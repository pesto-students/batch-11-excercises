function countDeletionsRequired(stringToCheck) {
  let currentCharacter = stringToCheck[0];
  let deletionsRequired = 0;
  for (let i = 1; i < stringToCheck.length; i += 1) {
    if (stringToCheck[i] === currentCharacter) {
      deletionsRequired += 1;
    } else {
      currentCharacter = stringToCheck[i];
    }
  }
  return deletionsRequired;
}

function alternatingCharacters(strings) {
  const numberOfDeletions = [];
  for (let i = 0; i < strings.length; i += 1) {
    numberOfDeletions.push(countDeletionsRequired(strings[i]));
  }
  return numberOfDeletions;
}

export {
  alternatingCharacters,
};
