const isArrayOrObject = (object) => object.constructor.name === 'Array' || object.constructor.name === 'Object';
const isObject = (object) => object.constructor.name === 'Object';
const isNullOrUndefined = (element) => element === null || element === undefined;
function deepCopyObject(object) {
  if (isNullOrUndefined(object)) return object;
  if (Array.isArray(object)) return [...object];
  if (!isObject(object)) return object;
  const copiedObject = {};
  for (const property in object) {
    if (isArrayOrObject(object[property])) {
      copiedObject[property] = deepCopyObject(object[property]);
    } else {
      copiedObject[property] = object[property];
    }
  }
  return copiedObject;
}

export { deepCopyObject };
