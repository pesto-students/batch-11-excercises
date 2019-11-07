function chunkArrayInGroups(array, segmentSize) {
  const groupOfArray = [];
  let lowerBound = 0,
    upperBound = segmentSize;
  while (array.length > upperBound) {
    groupOfArray.push(array.slice(lowerBound, upperBound));
    lowerBound = lowerBound + segmentSize;
    upperBound = upperBound + segmentSize;
  }
  groupOfArray.push(array.slice(lowerBound, array.length));

  return groupOfArray;
}

export {
  chunkArrayInGroups,
};