
function knownProp(object) {
  const handler = {
    get: (target, name) => {
      if (!(name in target)) {
        throw new TypeError('Unknown Property is accessed.');
      }
      return target[name];
    },
  };

  return new Proxy(object, handler);
}

export {
  knownProp,
};
