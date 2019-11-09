
function pairwise(numbers, sum) {
  const seen = []; let indicesSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!seen.includes(i) && !seen.includes(j)) {
        if (numbers[i] + numbers[j] === sum) {
          seen.push(i);
          seen.push(j);
          indicesSum += i + j;
        }
      }
    }
  }
  return indicesSum;
}

export {
  pairwise,
};
