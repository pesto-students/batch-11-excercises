
function lowercaseKeys(object) {
  const keys = Object.keys(object);
  let size = keys.length - 1;
  const newObject = {};
  while (size >= 0) {
    const key = keys[size];
    newObject[key.toLowerCase()] = object[key];
    size -= 1;
  }
  return newObject;
}

export {
  lowercaseKeys,
};
