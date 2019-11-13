
function arrayAddition(firstArray, secondArray) {
  const isEmpty = (array) => array.length === 0;
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new Error(`Expected array with numbers in argument, 
  Instead Got firstArgument: ${typeof firstArray}, secondArgument: ${typeof secondArray}`);
  }

  if (isEmpty(firstArray) || isEmpty(secondArray)) throw new Error(`Empty array is provided as input. First Input Length: ${firstArray.length} , Second Input Length: ${secondArray.length}`);
  if (!firstArray.every(Number.isInteger) || !secondArray.every(Number.isInteger)) throw new Error('Some of the value(s) in array is not number.');
  // eslint-disable-next-line max-len
  const maximumLength = firstArray.length >= secondArray.length ? firstArray.length : secondArray.length;
  const resultingArray = [];
  for (let i = 0; i < maximumLength;) {
    const numberFromFirstArray = firstArray[i] || 0;
    const numberFromSecondArray = secondArray[i] || 0;
    const summation = Number(numberFromFirstArray) + Number(numberFromSecondArray);
    resultingArray.push(summation);
    i += 1;
  }
  return resultingArray;
}
export {
  arrayAddition,
};
