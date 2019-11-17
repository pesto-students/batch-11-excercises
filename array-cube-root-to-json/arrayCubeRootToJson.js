
function arrayCubeRootToJson(arrayOfNumbers) {
  const isArray = arrayOfNumbers instanceof Array;
  if (!isArray) {
    throw new Error('argument must be an array');
  }
  if (!arrayContainsNumbers(arrayOfNumbers)) {
    throw new Error('Array must contain numbers only');
  }
  const jsonCubeRoot = arrayOfNumbers.reduce((acc, curr) => {
    acc[curr] = Math.cbrt(curr);
    return acc;
  }, {});
  return jsonCubeRoot;
}

const arrayContainsNumbers = (array) => {
  return array.reduce((acc, curr) => {
    acc = Number.isInteger(curr);
    return acc;
  });
}

export {
  arrayCubeRootToJson,
};
