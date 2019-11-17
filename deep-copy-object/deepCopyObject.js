
function deepCopyObject(object) {
  let copiedObject = {};
  const isObjectInstance = (obj) => obj instanceof Object;

  if (!isObjectInstance(object)) {
    return object;
  }
  copiedObject = Object.entries(object).reduce((acc, [key, value]) => {
    acc[key] = deepCopyObject(value);
    return acc;
  }, {});

  return copiedObject;
}

export {
  deepCopyObject,
};
