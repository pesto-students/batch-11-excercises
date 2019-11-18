
function searchSortedMatrix({ search, matrix }) {
  const containingArray = matrix.filter((elementArray) => {
    if (elementArray[0] <= search && elementArray[elementArray.length - 1] >= search) {
      return true;
    }
    return false;
  });

  if (containingArray[0] !== undefined && containingArray[0].includes(search)) {
    return true;
  }
  return false;
}

export {
  searchSortedMatrix,
};
