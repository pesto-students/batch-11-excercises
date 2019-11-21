
function mergeAll(objects) {
  const resultObject = objects.reduce((acc, currentObj) => {
    for (const key of Object.keys(currentObj)) {
      acc[key] = currentObj[key];
    }
    return acc;
  }, {});
  return resultObject;
}

export {
  mergeAll,
};
