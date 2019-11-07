
function objectInvert(simpleObject) {
  const invertedObject = {};
  for (const key in simpleObject) {
    if (Object.prototype.hasOwnProperty.call(simpleObject, key)) {
      invertedObject[simpleObject[key]] = key;
    }
  }
  return invertedObject;
}

export {
  objectInvert,
};
