
function objectInvert(inputObject) {
  const keys = Object.keys(inputObject);
  const invertedObject = {};
  keys.forEach((key) => {
    const invertedKey = inputObject[key];
    const invertedValue = key;
    invertedObject[invertedKey] = invertedValue;
  });
  return invertedObject;
}

export {
  objectInvert,
};
