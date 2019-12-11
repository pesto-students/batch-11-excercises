
function placeInMiddle(originalArray, arrayToPlace) {
  const originalArrayCopy = [...originalArray];
  const originalArrayLength = originalArray.length;
  const middleIndexOfOriginalArray = Math.round(Math.floor(originalArrayLength / 2));
  const firstSectionOfOriginalArray = originalArrayCopy.splice(0, middleIndexOfOriginalArray);
  const resultArray = [...firstSectionOfOriginalArray, ...arrayToPlace, ...originalArrayCopy];
  return resultArray;
}

export {
  placeInMiddle,
};
