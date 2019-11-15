function deepCopyObject(originalObj) {
  let newObj = originalObj;
  if (originalObj && typeof originalObj === 'object') {
    newObj = Object.prototype.toString.call(originalObj) === '[object Array]' ? [] : {};

    Object.keys(originalObj).map((key) => {
      newObj[key] = deepCopyObject(originalObj[key]);
      return newObj[key];
    });
  }
  return newObj;
}

export {
  deepCopyObject,
};
