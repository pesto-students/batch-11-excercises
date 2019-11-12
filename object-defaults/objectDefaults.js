
function objectDefaults(object, defaultValue) {
  const objectNewCopy = object;
  for (const key of Object.keys(defaultValue)) {
    if (!(key in object)) {
      objectNewCopy[key] = defaultValue[key];
    }
  }
  return objectNewCopy;
}

export {
  objectDefaults,
};
