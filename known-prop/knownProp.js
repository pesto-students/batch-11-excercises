
function knownProp(object) {
  const handler = {
    get: (target, objectKey) => {
      if (objectKey in target) {
        return target[objectKey];
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
