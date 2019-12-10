function threeSum(Numbers, finalSum) {
  if (Numbers.length < 3) {
    throw new Error('Given array is less than 3');
  }

  if (typeof finalSum !== 'number') {
    throw new Error('given value is not number');
  }

  for (let i = 0; i < Numbers.length; i += 1) {
    for (let j = i + 1; j < Numbers.length; j += 1) {
      for (let k = j + 1; k < Numbers.length; k += 1) {
        const sum = Numbers[i] + Numbers[j] + Numbers[k];
        if (sum === finalSum) return [Numbers[i], Numbers[j], Numbers[k]];
      }
    }
  }
  return null;
}

export {
  threeSum,
};
