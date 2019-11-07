
function findElement(array, truthTest) {
  const passedValues = array.filter(truthTest);
  if (passedValues.length === 0) {
    return undefined;
  }
  const result = passedValues[0];
  return result;
}

export {
  findElement,
};
