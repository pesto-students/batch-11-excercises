/* eslint-disable arrow-parens */
function mergeAll(objects) {
  const mergedObject = {};
  objects.forEach(object => {
    const keys = Object.keys(object);
    for (const key of keys) {
      if (!mergedObject[key]) {
        mergedObject[key] = object[key];
      } else {
        mergedObject[key] = object[key];
      }
    }
  });
  return mergedObject;
}

export { mergeAll };
