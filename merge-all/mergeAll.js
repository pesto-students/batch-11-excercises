
function mergeAll(objects) {
  const mergedObject = objects.reduce((merged, object) => ({ ...merged, ...object }), {});
  return mergedObject;
}

export {
  mergeAll,
};
