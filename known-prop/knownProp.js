
function knownProp(object) {
  const handler = {
    get: (target, property) => {
      if (property in target) {
        return target[property];
      }
      throw new TypeError('Unknown property is accessed');
    }
  };
  let proxy = new Proxy(object, handler);
  return proxy;
}

export {
  knownProp,
};
