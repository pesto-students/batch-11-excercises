function findLargestNumberInArray(numberArray) {
  let largestNumber = numberArray[0];
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] > largestNumber) {
      largestNumber = numberArray[i];
    }
  }
  return largestNumber;
}

function largeOfFour(nestedArrayOfNumbers) {
  const arrayOfLargestNumbers = [];
  for (let i = 0; i < nestedArrayOfNumbers.length; i += 1) {
    arrayOfLargestNumbers.push(findLargestNumberInArray(nestedArrayOfNumbers[i]));
  }
  return arrayOfLargestNumbers;
}

export {
  largeOfFour,
};
