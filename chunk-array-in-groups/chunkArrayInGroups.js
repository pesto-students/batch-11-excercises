
function chunkArrayInGroups(wholeArray, chunkSize) {
  const copyOfWholeArray = [...wholeArray];
  const chunked = [];
  while (copyOfWholeArray.length > 0) {
    const chunk = copyOfWholeArray.splice(0, chunkSize);
    chunked.push(chunk);
  }
  return chunked;
}

export {
  chunkArrayInGroups,
};
