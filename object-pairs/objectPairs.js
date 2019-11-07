
function objectPairs(originalObject) {
  const keysOfObjects = Object.keys(originalObject);
  const keyValuePairArray = keysOfObjects.map((key) => [key, originalObject[key]]);
  return keyValuePairArray;
}

export {
  objectPairs,
};
