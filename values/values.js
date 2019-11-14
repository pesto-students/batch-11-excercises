
function values(obj) {
  const keys = Object.keys(obj);
  return keys.map((key) => obj[key]);
}

export {
  values,
};
