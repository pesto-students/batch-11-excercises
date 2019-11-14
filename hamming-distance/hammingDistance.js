
function hammingDistance(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('The length of both the strings should be equal.');
  }
  const firstStringCharacters = firstString.split('');
  const secondStringCharacters = secondString.split('');
  const { length } = firstStringCharacters;
  let changesRequired = 0;

  for (let i = 0; i < length; i += 1) {
    if (firstStringCharacters[i] !== secondStringCharacters[i]) {
      changesRequired += 1;
    }
  }

  return changesRequired;
}

export {
  hammingDistance,
};
