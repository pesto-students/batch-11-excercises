
function objectAssign(targetObj, ...sourceObjects) {
  sourceObjects.reduce((acc, current) => Object.assign(acc, current), targetObj);
  return targetObj;
}

export {
  objectAssign,
};
