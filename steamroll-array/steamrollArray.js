
function steamrollArray(rolledArray) {
  const flattenedArray = [];
  function flatten(rolled) {
    if (Array.isArray(rolled)) {
      for (const item of rolled) {
        flatten(item);
      }
    } else {
      flattenedArray.push(rolled);
    }
  }
  flatten(rolledArray);
  return flattenedArray;
}

export {
  steamrollArray,
};
