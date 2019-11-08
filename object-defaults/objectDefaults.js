
function objectDefaults(object, defaultObject) {
  const mergedObject = { ...object };
  for (let [key, value] of Object.entries(defaultObject)) {
    if (!mergedObject.hasOwnProperty(key)) {
      mergedObject[key] = value;
    }
  }
  return mergedObject;
}

export {
  objectDefaults,
};
