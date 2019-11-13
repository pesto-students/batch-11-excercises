function arrayCubeRootToJson(numbers) {
  const isArray = Array.isArray(numbers);
  const isNumber = (number) => {
    if (number && (Number.isInteger(Number(number)) || (number && number === Infinity))) {
      return true;
    }
    return false;
  };
  if (!isArray) {
    throw new Error('Not an Array');
  }
  if (numbers.every(isNumber) === false) {
    throw new Error('Not every element in array is integer');
  }
  const jsonOfCubeRoot = {};
  numbers.map((number) => {
    jsonOfCubeRoot[number] = Math.cbrt(number);
    return jsonOfCubeRoot;
  });
  return jsonOfCubeRoot;
}

export {
  arrayCubeRootToJson,
};
