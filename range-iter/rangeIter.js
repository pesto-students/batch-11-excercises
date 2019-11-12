
function* rangeIter(start, end) {
  console.log(end);
  if (start === undefined || end === undefined) {
    throw new TypeError('undefined is not a number');
  }

  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

rangeIter[Symbol.iterator] = rangeIter();

export {
  rangeIter,
};
