function lowercaseKeys(objectTobeTransformed) {
  const transformedObject = {};
  Object.keys(objectTobeTransformed).forEach((key) => {
    transformedObject[key.toLowerCase()] = objectTobeTransformed[key];
  });
  return transformedObject;
}

export {
  lowercaseKeys,
};
