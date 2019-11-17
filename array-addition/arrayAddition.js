function arrayAddition(firstArray, secondArray) {
  if (firstArray.length === 0 || secondArray.length === 0) {
    throw new Error('Arrays should not be empty');
  }
  if (!(firstArray instanceof Array) || !(secondArray instanceof Array)) {
    throw new Error('Passed args should be an Array');
  }

  const isNumber = (number) => {
    if (typeof number === 'number') {
      return true;
    }
    return false;
  };

  const addArrays = (first, second) => {
    const result = first.reduce((acc, current) => {
      if (!isNumber(current)) {
        throw new Error('Array elements should be a number');
      }
      acc.push(current + second.shift());
      return acc;
    }, []);

    return result.concat(second);
  };

  return firstArray.length > secondArray.length ? addArrays(secondArray, firstArray) : addArrays(firstArray, secondArray);
}

export {
  arrayAddition,
};