
function rangeIter(...bounds) {
  if (bounds.length < 2) {
    throw TypeError('/undefined is not a number/');
  }
  const [lowerBound, upperBound] = bounds;
  if (typeof upperBound !== 'number') {
    throw TypeError(`/${upperBound} is not a number/`);
  }
  if (lowerBound > upperBound) {
    return [];
  }
  const iterable = [];
  let counter = lowerBound;
  while (counter <= upperBound) {
    iterable.push(counter);
    counter += 1;
  }
  return iterable;
}

export {
  rangeIter,
};
