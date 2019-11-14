
function hammingDistance(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('Strings with same length should be provided');
  }
  const distance = [...firstString].reduce((acc, currentChar, index) => {
    if (currentChar !== secondString.charAt(index)) {
      acc += 1;
    }
    return acc;
  }, 0);

  return distance;
}

export {
  hammingDistance,
};
