
function pairwise(numbers, targetSum) {
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === targetSum) {
        result += i + j;
      }
    }
  }
  return result;
}

export {
  pairwise,
};
