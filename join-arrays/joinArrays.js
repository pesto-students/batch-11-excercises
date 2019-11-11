
function joinArrays(...arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}

export {
  joinArrays,
};
