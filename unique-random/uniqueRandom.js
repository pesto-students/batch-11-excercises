function uniqueRandom(lowerBound, upperBound) {
  let previousValue = 0;

  const generateRandom = () => {
    const generatedRandom = Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
    if (generatedRandom === previousValue) {
      return generateRandom();
    }
    previousValue = generatedRandom;
    return generatedRandom;
  };

  return generateRandom;
}
export {
  uniqueRandom,
};