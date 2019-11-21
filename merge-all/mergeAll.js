
function mergeAll(objects) {
  const mergedObject = objects.reduce((accumulator = {}, obj) => {
    Object.keys(obj).map((key) => {
      accumulator[key] = obj[key];
      return true;
    });
    return accumulator;
  });
  return mergedObject;
}

export {
  mergeAll,
};
