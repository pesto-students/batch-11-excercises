
function objectDefaults(obj, defaultObj) {
  const objWithDefaults = {};
  const defaultEntries = Object.entries(defaultObj);
  const entries = Object.entries(obj);
  for (const [key, val] of defaultEntries) {
    objWithDefaults[key] = val;
  }
  for (const [key, val] of entries) {
    objWithDefaults[key] = val;
  }
  return objWithDefaults;
}

export {
  objectDefaults,
};
