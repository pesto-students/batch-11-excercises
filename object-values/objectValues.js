
function objectValues(object) {
  const values = [];
  for (const key of Object.keys(object)) {
    values.push(object[key]);
  }
  return values;
}

export {
  objectValues,
};
