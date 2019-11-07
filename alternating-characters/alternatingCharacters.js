
function alternatingCharacters(words) {
  const removalCounts = [];
  words.forEach((word) => {
    const characters = word.split('');
    let removalCount = 0;
    for (let i = 0; i < characters.length - 1; i += 1) {
      if (characters[i] === characters[i + 1]) {
        removalCount += 1;
      }
    }
    removalCounts.push(removalCount);
  });
  return removalCounts;
}

export {
  alternatingCharacters,
};
