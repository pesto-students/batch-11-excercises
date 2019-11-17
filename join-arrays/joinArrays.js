
function joinArrays(...arrays) {
  let joinedArrays = [];

  arrays.forEach((array) => {
    joinedArrays = joinedArrays.concat(array);
  });
  return joinedArrays;
}

export {
  joinArrays,
};
