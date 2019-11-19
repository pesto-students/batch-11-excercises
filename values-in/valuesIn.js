
function valuesIn(object) {
  const inheritedAndOwnValues = [];
  for (const property in object) {
    inheritedAndOwnValues.push(object[property]);
  }
  return inheritedAndOwnValues;
}

export {
  valuesIn,
};
