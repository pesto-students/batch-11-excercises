
function findElement(array, truthTest) {
  const result = array.filter(truthTest);
  if (result.length === 0) {
    return undefined;
  }
  return result;
}

export {
  findElement,
};
