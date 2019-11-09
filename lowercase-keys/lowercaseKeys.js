
function lowercaseKeys(uppercaseKeysObj) {
  if (typeof uppercaseKeysObj !== 'object') {
    return {};
  }
  const lowerKeys = Object.keys(uppercaseKeysObj).map((key) => key.toLowerCase());
  const lowercaseKeysObj = {};
  lowerKeys.forEach((key) => {
    lowercaseKeysObj[key] = true;
  });
  return lowercaseKeysObj;
}

export {
  lowercaseKeys,
};
