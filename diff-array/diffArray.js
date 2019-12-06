
function diffArray(firstArray, secondArray) {
  const unionOfArrays = union(firstArray, secondArray);
  const commonElements = intersection(firstArray, secondArray);
  const symmetricDifference = unionOfArrays.filter((element) => !commonElements.includes(element));
  return symmetricDifference;
}

function union(firstArray, secondArray) {
  const unionOfArrays = [...firstArray, ...secondArray];
  return unionOfArrays;
}

function intersection(firstArray, secondArray) {
  const commonElements = firstArray.filter((element) => secondArray.includes(element));
  return commonElements;
}
export {
  diffArray,
};
