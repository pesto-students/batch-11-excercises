
function knownProp(actualObj) {
  const knownPropHandler = {
    get(obj, prop) {
      if (!(prop in obj)) {
        throw new TypeError('Tried to read Unknown property');
      }
      return obj[prop];
    },
  };
  return new Proxy(actualObj, knownPropHandler);
}

export {
  knownProp,
};
