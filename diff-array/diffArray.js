
function diffArray(array1, array2) {
  const array1Filtered = array1.filter((item) => !array2.includes(item));
  const array2Filtered = array2.filter((item) => !array1.includes(item));
  return array1Filtered.concat(array2Filtered);
}

export {
  diffArray,
};
