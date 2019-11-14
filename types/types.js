
function type(value) {
  if (value instanceof Array) {
    return 'Array';
  }
  if (value instanceof RegExp) {
    return 'RegExp';
  }
  if (value instanceof Object) {
    return 'Object';
  }
  if (typeof value === 'number') {
    return 'Number';
  }
  if (typeof value === 'string') {
    return 'String';
  }
  if (value === null) {
    return 'Null';
  }
  if (typeof value === 'undefined') {
    return 'Undefined';
  }
  return undefined;
}

export {
  type,
};
