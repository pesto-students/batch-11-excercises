
function chunkArrayInGroups(elements, groupSize) {
  let chunks = [];
  let beginChunk = 0;
  let endChunk = groupSize;
  while (endChunk < elements.length) {
    chunks.push(elements.slice(beginChunk, endChunk));
    beginChunk += groupSize;
    endChunk += groupSize;
  }
  chunks.push(elements.slice(beginChunk));
  return chunks;
}

export {
  chunkArrayInGroups,
};
