
function searchSortedMatrix({ search, matrix }) {
  const searchRange = (arr) => arr[0] <= search && arr[arr.length - 1] >= search;
  const rangeFilteredMatrix = matrix.filter(searchRange);
  const rangeArray = rangeFilteredMatrix.length > 0 ? rangeFilteredMatrix[0] : [];
  return rangeArray.includes(search);
}

export {
  searchSortedMatrix,
};
