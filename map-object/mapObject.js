
function mapObject(object, mapperFunction) {
  const objectCopy = object;
  for (const key of Object.keys(object)) {
    objectCopy[key] = mapperFunction(object[key]);
  }
  return object;
}

export {
  mapObject,
};
