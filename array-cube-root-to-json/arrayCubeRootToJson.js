
function arrayCubeRootToJson(numbers) {
  const isNumber = (number) => {
    if (number && (Number.isInteger(Number(number)) || (number && number === Infinity))) {
      return true;
    }
    return false;
  };
  if (Array.isArray(numbers) === false) throw new Error('Provided value is not an array of numbers');
  if (numbers.every(isNumber) === false) throw new Error('Not every element in list is integer');
  const resultObject = {};
  numbers.map((number) => {
    resultObject[`${number}`] = Math.cbrt(number);
    return resultObject;
  });
  return resultObject;
}

export {
  arrayCubeRootToJson,
};
