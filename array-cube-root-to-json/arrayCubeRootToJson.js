
function arrayCubeRootToJson(numbers) {
  let cubeRootNumberObj = {};
  const isNumber = (number) => {
    if (typeof number === 'number' || !isNaN(parseInt(number, 10))) {
      return true;
    }
    return false;
  };

  if (!(numbers instanceof Array)) {
    throw new Error(`Expected an array received ${typeof numbers}`);
  }
  cubeRootNumberObj = numbers.reduce((acc, number) => {
    if (!isNumber(number)) {
      throw new Error(`Expected numbers in array received ${typeof number}`);
    }
    acc[number] = Math.cbrt(number);
    return acc;
  }, {});

  return cubeRootNumberObj;
}

export {
  arrayCubeRootToJson,
};
