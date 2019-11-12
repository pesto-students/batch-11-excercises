
function mapObject(object, objectKeyMap) {
  const objectNewCopy = object;
  for (const key of Object.keys(object)) {
    objectNewCopy[key] = objectKeyMap(object[key]);
  }
  return object;
}

export {
  mapObject,
};
