function shortestCommonSupersequence(firstSequence, secondSequence) {
  const firstUniqueSequence = [];
  const secondUniqueSequence = [];

  firstSequence.forEach(element => {
    if (!firstUniqueSequence.includes(element)) {
      firstUniqueSequence.push(element);
    }
  });

  secondSequence.forEach(element => {
    if (!secondUniqueSequence.includes(element)) {
      secondUniqueSequence.push(element);
    }
  });

  return firstUniqueSequence.concat(secondUniqueSequence);
}

export { shortestCommonSupersequence };
