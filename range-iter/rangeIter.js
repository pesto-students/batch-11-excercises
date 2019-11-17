const badArgumentHandler = (...range) => {
  if (range.length < 2) {
    throw TypeError(
      'Undefined is not a number. Pass number as range for arguments',
    );
  }
  if (typeof range[0] !== 'number' || typeof range[1] !== 'number') {
    throw TypeError('Pass number as range for arguments');
  }
};
const rangeIter = (...range) => {
  badArgumentHandler(...range);
  let startValue = range[0];
  const endValue = range[1];
  if (startValue > endValue) {
    return [];
  }
  if (startValue === endValue) {
    return [startValue];
  }

  const iterable = [];
  while (startValue <= endValue) {
    iterable.push(startValue);
    startValue += 1;
  }
  return iterable;
};

export { rangeIter };
