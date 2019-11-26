
function mapObject(obj, mapper) {
  const keys = Object.keys(obj);
  const mappedObj = {};
  keys.map((key) => {
    mappedObj[key] = mapper(obj[key]);
    return key;
  });
  return mappedObj;
}

export {
  mapObject,
};
