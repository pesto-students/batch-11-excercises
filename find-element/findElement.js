function findElement(elementsArray) {
  const result = [];
  for (let i = 0; i < elementsArray.length; i += 1) {
    if (elementsArray[i] % 2 === 0) {
      result.push(elementsArray[i]);
    }
  }
  return result[0];
}

export {
  findElement,
};
