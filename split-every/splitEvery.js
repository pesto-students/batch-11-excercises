
function splitEvery(splitLength, list) {
  if (splitLength < 1) {
    throw Error('Split length should be positive');
  }
  const isListString = typeof list === 'string';
  const arr = isListString ? list.split('') : list;
  const accumulator = [];
  arr.forEach((item, index) => {
    const splittedArrIndex = Math.floor(index / splitLength);
    const splittedArray = accumulator[splittedArrIndex] ? accumulator[splittedArrIndex] : [];
    let splittedValue;
    if (isListString) {
      splittedArray.split('').push(item);
      const concatedList = splittedArray;
      splittedValue = concatedList.join('');
    } else {
      splittedArray.push(item);
      splittedValue = splittedArray;
    }
    accumulator[splittedArrIndex] = splittedValue;
    // return accumulator;
  });
  return accumulator;
}

export {
  splitEvery,
};
