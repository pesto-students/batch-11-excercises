
function searchSortedMatrix({ search, matrix }) {
  // eslint-disable-next-line arrow-body-style
  const joinedMatrix = matrix.reduce((partialArray, currentArray) => {
    return partialArray.concat(currentArray);
  }, []);
  return joinedMatrix.indexOf(search) > -1;
}

export {
  searchSortedMatrix,
};
