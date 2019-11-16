
function joinArrays(...numberArrays) {
  const concat = (numbers, numberArray) => numbers.concat(numberArray);
  return numberArrays.reduce(concat);
}

export {
  joinArrays,
};
