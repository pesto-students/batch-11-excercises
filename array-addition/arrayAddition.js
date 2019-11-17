function validateInputs(array1, array2) {
  if (array1.length === 0 || array2.length === 0) throw new Error('Array can\'t be empty');
  array1.forEach((element) => {
    if (typeof element !== 'number') throw new Error('Array elements must be of type number');
  });
  array2.forEach((element) => {
    if (typeof element !== 'number') throw new Error('Array elements must be of type number');
  });
}

function sortArraysLength(...numberArrays) {
  const sortArrays = (numbers1, numbers2) => numbers2.length - numbers1.length;
  const [sortedArray1, sortedArray2] = numberArrays.sort(sortArrays);
  return [sortedArray1, sortedArray2];
}

const makeArraysLengthEqual = (numbers1, numbers2) => {
  const arrayLengthDiff = numbers1.length - numbers2.length;
  let i = 1;
  while (i <= arrayLengthDiff) {
    numbers2.push(0);
    i += 1;
  }
};

function arrayAddition(...numberArrays) {
  const [numbers1, numbers2] = sortArraysLength(...numberArrays);
  validateInputs(numbers1, numbers2);
  makeArraysLengthEqual(numbers1, numbers2);
  const addition = numbers1.map((number, index) => number + numbers2[index]);
  return addition;
}

export {
  arrayAddition,
};
