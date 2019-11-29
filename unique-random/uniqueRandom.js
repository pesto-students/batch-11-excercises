
function uniqueRandom(lowerBound, upperBound) {
  let previouslyGenerated = null;

  const recursiveRandom = () => {
    const generatedRandom = lowerBound + Math.ceil(Math.random() * (upperBound - lowerBound));
    if (generatedRandom === previouslyGenerated) {
      return recursiveRandom();
    }
    previouslyGenerated = generatedRandom;
    return generatedRandom;
  };

  return recursiveRandom;
}

export {
  uniqueRandom,
};
