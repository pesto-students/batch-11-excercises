/* eslint-disable no-else-return */
/* eslint-disable max-len */

function threeSum(numbersArray, target) {
  if (numbersArray.length < 3) {
    throw new Error('There must be atleast 3 values inside the array.');
  }
  if (typeof target !== 'number') {
    throw new Error('The specified target must be a positive numeric value.');
  }

  let i = 0;
  const triplets = [];

  while (i < numbersArray.length - 2) {
    let leftPointer = i + 1;
    let rightPointer = numbersArray.length - 1;

    while (leftPointer < rightPointer) {
      if (numbersArray[i] + numbersArray[leftPointer] + numbersArray[rightPointer] === target) {
        triplets.push(numbersArray[i]);
        triplets.push(numbersArray[leftPointer]);
        triplets.push(numbersArray[rightPointer]);
        return triplets;
      } else if (numbersArray[i] + numbersArray[leftPointer] + numbersArray[rightPointer] < target) {
        leftPointer += 1;
      } else {
        rightPointer -= 1;
      }
    }

    i += 1;
  }
  return null;
}

export {
  threeSum,
};
