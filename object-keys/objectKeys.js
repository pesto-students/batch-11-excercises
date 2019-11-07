
function objectKeys(object) {
  const objectProperties = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      objectProperties.push(object[key]);
    }
  }
  return objectProperties;
}

export {
  objectKeys,
};
