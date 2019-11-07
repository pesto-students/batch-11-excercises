
function pairwise(addendArray, sumValue) {
  let sumOfIndices = 0;
  const totalNumbers = addendArray.length;
  const flagArrayToMarkUsedNumbers = Array(totalNumbers).fill(false);

  for (let i = 0; i < totalNumbers - 1; i += 1) {
    if (!flagArrayToMarkUsedNumbers[i]) {
      for (let j = i + 1; j < totalNumbers; j += 1) {
        if (!flagArrayToMarkUsedNumbers[j]) {
          if (addendArray[i] + addendArray[j] === sumValue) {
            flagArrayToMarkUsedNumbers[i] = true;
            flagArrayToMarkUsedNumbers[j] = true;
            sumOfIndices += (i + j);
            break;
          }
        }
      }
    }
  }
  return sumOfIndices;
}

export {
  pairwise,
};
