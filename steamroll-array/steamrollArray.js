
function steamrollArray(flattenArray) {
  let returnedArray = [];
  for (let i = 0; i < flattenArray.length; i++) {
    if (Array.isArray(flattenArray[i])) {
      returnedArray = returnedArray.concat(steamrollArray(flattenArray[i]));
    } else {
      returnedArray.push(flattenArray[i]);
    }
  }
  return returnedArray;
}

export {
  steamrollArray,
};
