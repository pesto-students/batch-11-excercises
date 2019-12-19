
function objectAssign(target, ...sources) {
  sources.forEach((source) => {
    if (source) {
      const keys = Object.keys(source);
      keys.forEach((key) => {
        target[key] = source[key];
      });
    }
  });
  return target;
}

export {
  objectAssign,
};
