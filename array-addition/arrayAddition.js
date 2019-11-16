
function arrayAddition(firstArray, secondArray) {
  const firstArrayLength = firstArray.length;
  const secondArrayLength = secondArray.length;
  const isFirstArray = Array.isArray(firstArray);
  const isSecondArray = Array.isArray(secondArray);

  if (!isFirstArray || !isSecondArray) {
    throw new Error();
  }

  if (firstArrayLength < 1 || secondArrayLength < 1) {
    throw new Error();
  }

  const smallerArray = firstArrayLength > secondArrayLength ? secondArray : firstArray;
  const biggerArray = firstArray.length > secondArrayLength.length ? firstArray : secondArray;

  const concatArray = smallerArray.map((number, index) => {
    const isValidNumber1 = typeof smallerArray[index] === 'number';
    const isValidNumber2 = typeof number === 'number';
    if (!isValidNumber2 || !isValidNumber1) {
      throw new Error();
    }
    return biggerArray[index] + number;
  });

  const remainingArray = biggerArray.slice(smallerArray.length);
  return [...concatArray, ...remainingArray];
}

export {
  arrayAddition,
};
