const handler = {
  get(target, propName) {
    if (propName in target) {
      return target[propName];
    }
    throw new TypeError(`Unknown Property ${propName}`);
  },
};

function knownProp(obj) {
  return new Proxy(obj, handler);
}

export {
  knownProp,
};
