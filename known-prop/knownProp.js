
function knownProp(object) {
  const handler = {
    get: (target, key) => {
      if (key in target) {
        return Reflect.get(target, key);
      }
      throw new TypeError('Unknown property');
    },
  };

  const proxyObject = new Proxy(object, handler);
  return proxyObject;
}

export {
  knownProp,
};
