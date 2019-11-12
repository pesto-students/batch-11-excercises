
function objectKeys(object) {
  const keyArray = [];
  // eslint-disable-next-line guard-for-in
  for (const keys in object) {
    keyArray.push(keys);
  }
  return keyArray;
}

export {
  objectKeys,
};
