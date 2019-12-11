
function chunkArrayInGroups(incomingArray, groupLength) {
  const chunkedArrays = [];
  const numberOfChunks = Math.floor(incomingArray.length / groupLength);
  const chunkNumbers = Array.from(Array(numberOfChunks).keys());

  chunkNumbers.forEach((number) => {
    const chunkedArray = incomingArray.slice(number * groupLength, ((number + 1) * groupLength));
    chunkedArrays.push(chunkedArray);
  });

  const remainingArray = incomingArray.slice(numberOfChunks * groupLength);
  if (remainingArray.length > 0) {
    chunkedArrays.push(remainingArray);
  }
  return chunkedArrays;
}

export {
  chunkArrayInGroups,
};
