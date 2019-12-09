/**
 * Extract the values of default object
 * Check using Object.hasOwnProperty if any value is present for the specified key from default object.
 * If found, ignore, otherwise fill that.
*/
function objectDefaults(originalObject, objectContainingDefaultValues) {
  const defaultKeys = Object.keys(objectContainingDefaultValues);
  defaultKeys.forEach((defaultKey) => {
    if (!Object.prototype.hasOwnProperty.call(originalObject, defaultKey)) {
      // eslint-disable-next-line no-param-reassign
      originalObject[defaultKey] = objectContainingDefaultValues[defaultKey];
    }
  });
  return originalObject;
}

export {
  objectDefaults,
};
