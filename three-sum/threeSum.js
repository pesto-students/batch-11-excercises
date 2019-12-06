
function threeSum(values, sum) {
  if (values.length < 3) {
    throw new Error('Insufficient values provided in the list. Provide at least 3 values.');
  }

  if (typeof sum !== 'number') {
    throw Error(`${sum} is not a number`);
  }

  for (let i = 0; i < values.length; i += 1) {
    for (let j = i + 1; j < values.length; j += 1) {
      for (let k = j + 1; k < values.length; k += 1) {
        if ((values[i] + values[j] + values[k]) === sum) {
          return [values[i], values[j], values[k]];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
