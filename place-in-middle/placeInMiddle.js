
function placeInMiddle(firstArray, secondArray) {
  const indexOfMiddleElement = Math.floor(firstArray.length / 2);
  return [
    ...firstArray.slice(0, indexOfMiddleElement),
    ...secondArray,
    ...firstArray.slice(indexOfMiddleElement),
  ];
}

export {
  placeInMiddle,
};
