
function mapObject(object, transformer) {
  const transformedObject = { ...object };
  for (let key of Object.keys(transformedObject)) {
    let updatedValue = transformer(transformedObject[key]);
    if (updatedValue) {
      transformedObject[key] = updatedValue;
    }
  }
  return transformedObject;
}

export {
  mapObject,
};
