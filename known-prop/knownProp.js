function knownProp(object) {
  const proxy = new Proxy(object, {
    get(target, property) {
      if (!(property in target)) {
        throw TypeError('Unknown Property');
      }
      return target[property];
    },
  });

  return proxy;
}

export { knownProp };
