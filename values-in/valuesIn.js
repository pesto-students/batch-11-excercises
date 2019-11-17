
function valuesIn(obj) {
  const objValues = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    objValues.push(obj[key]);
  }
  return objValues;
}

export {
  valuesIn,
};
