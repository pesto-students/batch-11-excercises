function sumAll(pairValueArray) {
  let totalSum = 0;

  const [lowerBound, upperBound] = [...pairValueArray].sort((x, y) => x - y);

  for (let i = lowerBound; i <= upperBound; i += 1) {
    totalSum += i;
  }

  return totalSum;
}

export { sumAll };
