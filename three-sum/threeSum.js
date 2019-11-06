
function threeSum(numberArray, targetSum) {
  if (numberArray.length < 3) {
    throw new Error('Given array should contain at least 3 numbers');
  }

  if (typeof targetSum !== 'number') {
    throw new Error('Target sum should be a number');
  }

  function loopThroughArray() {
    for (const [firstLoopIndex, firstLoopValue] of numberArray.entries()) {
      for (const [secondLoopIndex, secondLoopValue] of numberArray.entries()) {
        for (const [thirdLoopIndex, thirdLoopValue] of numberArray.entries()) {
          if ((firstLoopIndex !== secondLoopIndex)
            && (secondLoopIndex !== thirdLoopIndex)
            && (firstLoopIndex !== thirdLoopIndex)) {
            if ((firstLoopValue + secondLoopValue + thirdLoopValue) === targetSum) {
              return [firstLoopValue, secondLoopValue, thirdLoopValue];
            }
          }
        }
      }
    }
    return null;
  }

  return loopThroughArray() || null;
}

export {
  threeSum,
};
