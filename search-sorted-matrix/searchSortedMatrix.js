const searchSortedMatrix = ({ search, matrix }) => {
  let findRowIndex = 1;
  if (matrix.length > 1) {
    findRowIndex = matrix.findIndex((i) => i[0] > search);
  }
  const row = matrix[findRowIndex - 1];
  for (let i = 0; i < row.length; i += 1) {
    if (row[i] === search) {
      return true;
    }
  }
  return false;
};

export { searchSortedMatrix };
