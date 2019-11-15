/* eslint-disable operator-linebreak */
/* eslint-disable quotes */

function threeSum(numbers, target) {
  if (numbers.length < 3) {
    throw new Error("Given array should contain at least 3 numbers");
  }

  if (typeof target !== "number") {
    throw new Error("Target sum should be a number");
  }

  function loopThroughArray() {
    for (const [firstLoopIndex, firstLoopValue] of numbers.entries()) {
      for (const [secondLoopIndex, secondLoopValue] of numbers.entries()) {
        for (const [thirdLoopIndex, thirdLoopValue] of numbers.entries()) {
          if (
            firstLoopIndex !== secondLoopIndex &&
            secondLoopIndex !== thirdLoopIndex &&
            firstLoopIndex !== thirdLoopIndex
          ) {
            if (firstLoopValue + secondLoopValue + thirdLoopValue === target) {
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

export { threeSum };
