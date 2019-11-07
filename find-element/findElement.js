function findElement(elementsArray) {
  const result = elementsArray.filter((element) => element % 2 === 0);
  return result[0];
}

export {
  findElement,
};
