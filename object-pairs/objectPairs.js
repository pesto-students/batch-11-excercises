
function objectPairs(object) {
  const pairs = [];
  for (const key of Object.keys(object)) {
    pairs.push([key, object[key]]);
  }
  return pairs;
}

export {
  objectPairs,
};
