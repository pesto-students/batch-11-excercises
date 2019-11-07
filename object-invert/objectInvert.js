
function objectInvert(originalObject) {
  const keysOfOriginalObject = Object.keys(originalObject);
  const valuesOfOriginalObject = Object.values(originalObject);
  const invertedObject = {};
  valuesOfOriginalObject.forEach((aValueFromOriginalObject, currentIndex) => {
    invertedObject[aValueFromOriginalObject] = keysOfOriginalObject[currentIndex];
  });
  return invertedObject;
}

export {
  objectInvert,
};
