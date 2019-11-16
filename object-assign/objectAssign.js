function objectAssign(target, ...objects) {
  for (const object of objects) {
    if (typeof object === 'object' && object !== null) {
      for (const [key, value] of Object.entries(object)) {
        target[key] = value;
      }
    }
  }
  return target;
}

export {
  objectAssign,
};
