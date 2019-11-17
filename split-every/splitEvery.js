const splitEvery = (splitLength, value) => {
  if (splitLength <= 0) {
    throw new Error('Split length must be greater than 0');
  }
  const splited = [];
  let iterable = value;
  while (iterable.length !== 0) {
    if (typeof iterable === 'string') {
      const temp = iterable.slice(0, splitLength);
      splited.push(temp);
      iterable = ''.concat(iterable.slice(splitLength));
    } else {
      const temp = iterable.splice(0, splitLength);
      splited.push(temp);
    }
  }
  return splited;
};

export { splitEvery };
