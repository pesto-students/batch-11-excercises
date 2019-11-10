
function chunkArrayInGroups(...args) {
  const [arrayToBeChunked, groupSize] = args;
  const groups = [];
  let lowerBound = 0;
  while (lowerBound < arrayToBeChunked.length) {
    const group = arrayToBeChunked.slice(lowerBound, lowerBound + groupSize);
    groups.push(group);
    lowerBound += groupSize;
  }
  return groups;
}

export {
  chunkArrayInGroups,
};
