
function objectInvert(object) {
  const newObject = {};
  Object.keys(object).map((key) => {
    newObject[object[key]] = key;
    return newObject;
  });
  return newObject;
}

export {
  objectInvert,
};
