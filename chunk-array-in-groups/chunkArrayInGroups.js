
function chunkArrayInGroups(array, numberOfElement) {
  const actualArray = [...array];
  const resultingArray = [];
  while (actualArray.length > 0) {
    const splicedElements = actualArray.splice(0, numberOfElement);
    resultingArray.push(splicedElements);
  }
  return resultingArray;
}

export {
  chunkArrayInGroups,
};
