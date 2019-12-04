function applyOperator(operator, ...listOfOperands) {
  if (!operator) throw new Error('An operator is required to perform the operation.Provide any of these operator +,-,*,/,%');
  if (listOfOperands.length === 0) return 0;
  let operatedValue = 0;
  switch (operator) {
    case '+':
      operatedValue = listOfOperands.reduce((alreadyAddedTotalNumber, currentNumber) => alreadyAddedTotalNumber + currentNumber, 0);
      break;
    case '-':
      operatedValue = listOfOperands.reduce((alreadySubstractedTotalNumber, currentNumber) => alreadySubstractedTotalNumber - currentNumber, 0);
      break;
    case '*':
      operatedValue = listOfOperands.reduce((alreadyMultipliedTotalNumber, currentNumber) => alreadyMultipliedTotalNumber * currentNumber, 1);
      break;
    case '/':
      operatedValue = listOfOperands.reduce((alreadyDividedTotalNumber, currentNumber) => alreadyDividedTotalNumber / currentNumber, 1);
      operatedValue = parseFloat(operatedValue.toFixed(4));
      break;
    case '%':
      operatedValue = listOfOperands.reduce((alreadyModuledTotalNumber, currentNumber) => alreadyModuledTotalNumber % currentNumber);
      break;
    default:
      throw new Error('Invalid Operator Has Been Provided. Please check if your operator is one of these : + , -, *, /, %');
  }
  return operatedValue;
}
export {
  applyOperator,
};
