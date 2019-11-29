function uniqueRandom(lowerBound, upperBound) {
  let prevNumber;
  const recursiveUniqueRandom = () => {
    const uniqueNumber = Math.ceil(Math.random() * (upperBound - lowerBound)) + lowerBound;
    if (uniqueNumber === prevNumber) {
      return recursiveUniqueRandom();
    }
    prevNumber = uniqueNumber;
    return uniqueNumber;
  };
  return recursiveUniqueRandom;
}

export {
  uniqueRandom,
};
