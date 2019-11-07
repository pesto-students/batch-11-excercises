
function chunkArrayInGroups(array, chunkSize) {
  const chunks = [];
  while (array.length) {
    chunks.push(array.splice(0, chunkSize));
  }
  return chunks;
}

export {
  chunkArrayInGroups,
};
