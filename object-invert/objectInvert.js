
function objectInvert(object) {
  const invertedObject = {};
  for (let [key, value] of Object.entries(object)) {
    invertedObject[value] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
