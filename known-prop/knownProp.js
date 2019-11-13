
const knownProp = (proxiedObject) => new Proxy(proxiedObject, {
  get: (object, property) => {
    if (property in object) {
      return object[property];
    }
    throw TypeError('/Unknown property');
  },
});

export {
  knownProp,
};
