
function values(object) {
  const ownValues = [];
  for (const property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ownValues.push(object[property]);
    }
  }
  return ownValues;
}

export {
  values,
};
