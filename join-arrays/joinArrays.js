
function joinArrays(...arrays) {
  return arrays.reduce((accumulator, arr) => [...accumulator, ...arr], []);
}

export {
  joinArrays,
};
