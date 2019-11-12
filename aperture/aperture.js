
function aperture(tupleLength, numbers) {
  let upperBound = tupleLength;
  let lowerBound = 0;
  const tuples = [];
  while (upperBound <= numbers.length) {
    tuples.push(numbers.slice(lowerBound, upperBound));
    upperBound += 1;
    lowerBound += 1;
  }
  return tuples;
}

export {
  aperture,
};
