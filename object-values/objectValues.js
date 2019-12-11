
function objectValues(inputObject) {
  const keys = Object.keys(inputObject);
  return keys.map((key) => inputObject[key]);
}

export {
  objectValues,
};
