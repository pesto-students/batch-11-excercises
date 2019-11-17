
function without(operandArray1, operandArray2) {
  const predicate = (item) => {
    const indexInArray1 = operandArray1.indexOf(item);
    const valueInArray1 = operandArray1[indexInArray1];
    if (valueInArray1) {
      return !Object.is(valueInArray1, item);
    }
    return true;
  };
  return operandArray2.filter(predicate);
}

export {
  without,
};
