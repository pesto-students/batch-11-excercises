const compareArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i += 1) {
    if (!(array1[i] === array2[i])) {
      return false;
    }
  }
  return true;
};

function doesEndWith(tail, iterable) {
  if (typeof iterable !== 'string' || Array.isArray(iterable)) {
    throw new Error('Enter a string or an Array!');
  }
  if (typeof iterable !== typeof tail) {
    throw new TypeError('Type mismatch between the provided arguments! ()');
  }
  const tailLength = tail.length;
  const actualTail = iterable.slice(iterable.length - tailLength);
  if (Array.isArray(iterable)) {
    return compareArrays(tail, actualTail);
  }
  if (tail === actualTail) {
    return true;
  }
  return false;
}

export {
  doesEndWith,
};
