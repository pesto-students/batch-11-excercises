
function objectValues(object) {
  const values = [];
  const invlaidValues = [null, undefined, 0, ""];
  for (let key in object) {
    const property = object[key];
    if (invlaidProperties.includes(property)) {
      properties.push(key.toString());
    } else {
      properties.push(property.toString());
    }
  }
  return properties;
}

export {
  objectValues,
};
