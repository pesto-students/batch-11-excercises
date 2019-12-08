function mapObject(object, callbackFunc) {
  const newObject = {};
  Object.keys(object).map((key) => {
    newObject[key] = callbackFunc(object[key]);
    return newObject;
  });
  return newObject;
}
export {
  mapObject,
};
