
function sumAll(listOfNumber) {
  listOfNumber.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  const [lowerNumber, higherNumber] = listOfNumber;
  const sumOfNumbersFromLowerNumberToHigherNumber = ((higherNumber * (higherNumber + 1)) / 2)
                                                    - ((lowerNumber - 1) * (lowerNumber / 2));
  return sumOfNumbersFromLowerNumberToHigherNumber;
}
export {
  sumAll,
};
