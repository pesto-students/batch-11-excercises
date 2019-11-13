function knownProp(object) {
  return new Proxy(object, {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      throw TypeError('Unknown property');
    },
  });
}

export {
  knownProp,
};
