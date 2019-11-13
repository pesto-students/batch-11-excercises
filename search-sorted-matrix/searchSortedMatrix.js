function searchSortedMatrix(object) {
  const {
    search,
    matrix,
  } = object;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === search) {
        return true;
      }
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
