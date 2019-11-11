
function joinArrays(...segmentedArrays) {
  const concatenatedArray = [].concat(...segmentedArrays);
  return concatenatedArray;
}

export {
  joinArrays,
};
