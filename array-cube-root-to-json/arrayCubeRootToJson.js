const validateInputs = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Input type must be an array of numbers');
  }
  array.forEach((item) => {
    if (!item) {
      throw new Error('Input type must be an array of numbers');
    }
    if (isNaN(Number(item))) {
      throw new Error('Input type must be an array of numbers');
    }
  });
};

function arrayCubeRootToJson(numbers) {
  validateInputs(numbers);
  const cubeRoots = {};
  let sign = 1;
  numbers.forEach((number) => {
    sign = number < 0 ? -1 : 1;
    cubeRoots[number] = sign * Math.ceil(Math.abs(number) ** (1 / 3));
  });
  return cubeRoots;
}

export {
  arrayCubeRootToJson,
};
