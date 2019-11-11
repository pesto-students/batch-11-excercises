
function placeInMiddle(array, valuesToInsertInMiddle) {
  const midpoint = Math.floor(array.length / 2);
  const arrayBeforeMidpoint = array.slice(0, midpoint);
  const arrayAfterMidpoint = array.slice(midpoint);
  return arrayBeforeMidpoint.concat(valuesToInsertInMiddle).concat(arrayAfterMidpoint);
}

placeInMiddle([1, 2, 6, 7], [3, 4, 5]);

export {
  placeInMiddle,
};
