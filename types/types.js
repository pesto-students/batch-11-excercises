function type(input) {
  if (Array.isArray(input)) {
    return 'Array';
  }
  if (input instanceof RegExp) {
    return 'RegExp';
  }
  if (input instanceof Object) {
    return 'Object';
  }
  if (typeof input === 'number') {
    return 'Number';
  }
  if (typeof input === 'string') {
    return 'String';
  }
  if (input === null) {
    return 'Null';
  }
  if (typeof input === 'undefined') {
    return 'Undefined';
  }
  return undefined;
}

export {
  type,
};
