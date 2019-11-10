
function objectKeys(object) {
  const objectProperties = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      objectProperties.push(key);
    }
  }
  return objectProperties;
}

export {
  objectKeys,
};
