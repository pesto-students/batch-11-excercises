/* eslint-disable prefer-const */

function sumAll(listOfTwoNumbers) {
  listOfTwoNumbers.sort((currentValue, nextValue) => currentValue > nextValue);
  let [firstNumber, secondNumber] = listOfTwoNumbers;
  let sumOfRange = 0;
  while (firstNumber <= secondNumber) {
    sumOfRange += firstNumber;
    firstNumber += 1;
  }
  return sumOfRange;
}

export {
  sumAll,
};
