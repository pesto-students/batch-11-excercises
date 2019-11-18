
function splitEvery(sliceLength, inputArray) {
  const resultArray = [];
  if (sliceLength < 1) {
    throw new Error('Slice length should be a positive number');
  }
  const isStringArray = (array) => array.every((element) => typeof element === 'string');

  const collection = typeof inputArray === 'string' ? inputArray.split('') : inputArray;
  let remaingArray = collection.reduce((acc, currentValue) => {
    if (acc.length === sliceLength) {
      acc = isStringArray(acc) ? acc.join('') : acc;
      resultArray.push(acc);
      acc = [currentValue];
    } else {
      acc.push(currentValue);
    }
    return acc;
  }, []);

  if (remaingArray.length > 0) {
    remaingArray = isStringArray(remaingArray) ? remaingArray.join('') : remaingArray;
    resultArray.push(remaingArray);
  }

  return resultArray;
}

export {
  splitEvery,
};
