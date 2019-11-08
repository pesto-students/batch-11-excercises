function lowercaseKeys(object) {
  const returnObject = {};
  Object.keys(object).forEach((keyInCaps) => {
    returnObject[keyInCaps.toLowerCase()] = object[keyInCaps];
  });
  return returnObject;
}

export {
  lowercaseKeys,
};
