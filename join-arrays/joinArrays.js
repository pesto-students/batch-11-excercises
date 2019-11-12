function joinArrays(...args) {
  const joinedArray = [];
  for (const arg of args) {
    for (const element of arg) {
      joinedArray.push(element);
    }
  }
  return joinedArray;
}

export {
  joinArrays,
};
