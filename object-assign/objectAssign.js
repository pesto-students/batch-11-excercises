
function objectAssign(target,...sourceObjects) {
  const mergedObject = sourceObjects.reduce((acc, obj) => {
    acc = Object.assign(acc, obj);
    return acc;
  }, target);
  return mergedObject;
}

export {
  objectAssign,
};
