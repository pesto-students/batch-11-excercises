
function objectDefaults(object, defaults) {
  const objectCopy = object;
  for (const key of Object.keys(defaults)) {
    if (!(key in object)) {
      objectCopy[key] = defaults[key];
    }
  }
  return objectCopy;
}

export {
  objectDefaults,
};
