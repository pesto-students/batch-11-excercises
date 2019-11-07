function chunkArrayInGroups(originalArray, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < originalArray.length) {
    chunkedArray.push(originalArray.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}
export {
  chunkArrayInGroups,
};
