
function steamrollArray(nestedArray) {
  const flattenedArray = [];
  let flatten = function (element) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      element.forEach(flatten);
    }
  }
  nestedArray.forEach(flatten);
  return flattenedArray;
}

export {
  steamrollArray,
};
