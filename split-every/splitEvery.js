
function splitEvery(sliceSize, collection) {
  let index = 0;
  const slices = [];
  while (index <= collection.length - sliceSize) {
    slices.push(collection.slice(index, sliceSize + index));
    index += sliceSize;
  }
  return slices;
}

export {
  splitEvery,
};
