
function chunkArrayInGroups(array, chunkSize) {
  const chunks = [];
  while (array.length !== 0) {
    chunks.push(array.splice(0, chunkSize));
  }
  return chunks;
}

export {
  chunkArrayInGroups,
};
