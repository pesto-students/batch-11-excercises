function mapObject(object, valueMapper) {
  const keysCollecton = Object.keys(object);

  for (let key of keysCollecton) {
    object[key] = valueMapper(object[key]);
  }
  return object;
}

export { mapObject };
