function type(input) {
  if (typeof input === 'number') {
    return 'Number';
  }
  if (typeof input === 'undefined') {
    return 'Undefined';
  }
  if (typeof input === 'string') {
    return 'String';
  }
  if (typeof input === 'object') {
    if (!(input instanceof Object)) {
      return 'Null';
    }
    if (input instanceof Array) {
      return 'Array';
    }
    if (input instanceof RegExp) {
      return 'RegExp';
    }
    return 'Object';
  }
}

export {
  type,
};
