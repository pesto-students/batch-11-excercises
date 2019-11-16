
function placeInMiddle(arr1, arr2) {
  const middle = Math.floor(arr1.length / 2);
  return [...arr1.slice(0, middle), ...arr2, ...arr1.slice(middle)];
}

export {
  placeInMiddle,
};
