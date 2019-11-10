
function lowercaseKeys(object) {
  const objectWithLowerCaseKeys = {};
  for (let [nonLowerCaseKey, value] of Object.entries(object)) {
    let lowerCaseKey = nonLowerCaseKey.toLowerCase();
    objectWithLowerCaseKeys[lowerCaseKey] = value;
  }
  return objectWithLowerCaseKeys;
}

export {
  lowercaseKeys,
};
