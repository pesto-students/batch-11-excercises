function alternatingCharacters(strings) {
  const deletionCountArray = [];
  strings.forEach((string) => {
    let numberOfDeletions = 0;
    for (let i = 1; i < string.length; i += 1) {
      if (string[i] === string[i - 1]) {
        numberOfDeletions += 1;
      }
    }
    deletionCountArray.push(numberOfDeletions);
  });
  return deletionCountArray;
}

export {
  alternatingCharacters,
};
