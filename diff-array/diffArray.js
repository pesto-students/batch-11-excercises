
function getArrayDifference(firstArrayToCompare, secondArrayToCompare) {
  const listWithDifferences = [];
  firstArrayToCompare.forEach((arrayItem) => {
    if (!secondArrayToCompare.includes(arrayItem)) listWithDifferences.push(arrayItem);
  });
  secondArrayToCompare.forEach((arrayItem) => {
    if (!firstArrayToCompare.includes(arrayItem)) listWithDifferences.push(arrayItem);
  });
  return listWithDifferences;
}

export {
  getArrayDifference,
};
