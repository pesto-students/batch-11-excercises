
function largeOfFour(arrayOfArrays) {
  let arrayOfMaximumNumbers = arrayOfArrays.map((currentArray) => Math.max(...currentArray));
  return arrayOfMaximumNumbers;
}

export {
  largeOfFour,
};
