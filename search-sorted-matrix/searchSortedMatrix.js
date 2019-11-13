
function searchSortedMatrix({ search, matrix }) {
  for (const row of matrix) {
    for (const number of row) {
      if (search < number) {
        return false;
      }
      if (!(search > number)) {
        return row.includes(search);
      }
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
