/* eslint-disable arrow-parens */
function mergeAll(objects) {
  const mergedObject = objects.reduce((acc, object) => {
    const keys = Object.keys(object);
    for (const key of keys) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
  return mergedObject;
}

export { mergeAll };
