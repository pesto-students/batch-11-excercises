
function mapObject(obj, modifyFn) {
  const keys = Object.keys(obj);
  const mappedObj = {};
  keys.forEach((key) => {
    mappedObj[key] = modifyFn(obj[key]);
  });
  return mappedObj;
}

export {
  mapObject,
};
