
function getArrayDifference(firstArrayToCompare, secondArrayToCompare) {
  const arrayWithDifference = [];
  firstArrayToCompare.forEach((arrayItem) => {
    if (!secondArrayToCompare.includes(arrayItem)) arrayWithDifference.push(arrayItem);
  });
  secondArrayToCompare.forEach((arrayItem) => {
    if (!firstArrayToCompare.includes(arrayItem)) arrayWithDifference.push(arrayItem);
  });
  return arrayWithDifference;
}

export {
  getArrayDifference,
};
