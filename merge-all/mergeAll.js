
function mergeAll(array) {
  const merged = {};
  for (const object of array) {
    for (const [key, value] of Object.entries(object)) {
      merged[key] = value;
    }
  }
  return merged;
}

export {
  mergeAll,
};
