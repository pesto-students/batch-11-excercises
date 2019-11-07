
function alternatingCharacters(strings) {
  return strings.map((word) => {
    let prevChar = '';
    let deletionCount = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < word.length; i++) {
      if (prevChar !== word[i]) {
        prevChar = word[i];
      } else {
        deletionCount += 1;
      }
    }
    return deletionCount;
  });
}

export {
  alternatingCharacters,
};
