
function type(object) {
  if (object === null) {
    return 'Null';
  }
  if (object === undefined) {
    return 'Undefined';
  }

  return object.constructor.name;
}

export {
  type,
};
