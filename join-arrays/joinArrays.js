
function joinArrays() {
  const nestedArrays = [...arguments];
  let joinedArray = [];
  for (let i = 0; i < nestedArrays.length; i++) {
    joinedArray = joinedArray.concat([...nestedArrays[i]]);
  }
  return joinedArray;
}

export {
  joinArrays,
};
