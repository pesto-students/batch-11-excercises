function searchSortedMatrix({
  search,
  matrix,
}) {
  for (const array of matrix) {
    for (const element of array) {
      if (search === element) {
        return true;
      }
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
