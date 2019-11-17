
function threeSum(numbers, sumToCalculate) {
  if (numbers.length < 3) {
    throw new Error('First argument must be array with more than 2 numbers');
  }
  if (typeof sumToCalculate !== 'number') {
    throw new Error('Second argument must be a number');
  }
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === sumToCalculate) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
