
function joinArrays(...numberArrays) {
  const combineSubArrays = (combinedArray, array) => {
    array.forEach((element) => {
      combinedArray.push(element);
    });
    return combinedArray;
  };
  return numberArrays.reduce(combineSubArrays, []);
}

export {
  joinArrays,
};
