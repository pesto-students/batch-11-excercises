
function lowercaseKeys(originalObject) {
  const keysInObject = Object.keys(originalObject);
  const newObjectWithLowerCaseKeys = {};
  // eslint-disable-next-line array-callback-return
  keysInObject.map((currentKey) => {
    newObjectWithLowerCaseKeys[String(currentKey).toLowerCase()] = originalObject[currentKey];
  });
  return newObjectWithLowerCaseKeys;
}

export {
  lowercaseKeys,
};
