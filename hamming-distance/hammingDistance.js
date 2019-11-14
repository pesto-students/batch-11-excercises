function hammingDistance(string1, string2) {
  if (string1.length !== string2.length) {
    throw Error('String are of different length');
  }
  return [...string1].reduce((acc, val, index) => {
    if (val !== string2[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

export {
  hammingDistance,
};
