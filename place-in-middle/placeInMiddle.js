
function placeInMiddle(firstArray, secondArray) {
  const middleElement = Math.floor(firstArray.length / 2);
  return [
    ...firstArray.slice(0, middleElement),
    ...secondArray,
    ...firstArray.slice(middleElement),
  ];
}

export {
  placeInMiddle,
};
