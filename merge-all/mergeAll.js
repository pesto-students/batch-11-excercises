
function mergeAll(objects) {
  const mergedObject = objects.reduce((acc, curr) => {
    acc = Object.assign(acc, curr);
    return acc;
  }, {});
  return mergedObject;
}

export {
  mergeAll,
};
