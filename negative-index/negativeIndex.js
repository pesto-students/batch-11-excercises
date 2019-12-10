const handler = {
  get(target, index, receiver) {
    if (typeof index === 'symbol') {
      return Reflect.get(target, index, receiver);
    }
    if (index < 0) {
      return Reflect.get(target, target.length - Math.abs(index), receiver);
    }
    return Reflect.get(target, index, receiver);
  },
  set(target, index, val, receiver) {
    if (typeof index === 'symbol') {
      return Reflect.set(target, index, val, receiver);
    }
    if (index < 0) {
      return Reflect.set(target, target.length - Math.abs(index), val, receiver);
    }
    return Reflect.set(target, index, val, receiver);
  },
};

function negativeIndex(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('/Only arrays are supported/');
  }
  const proxy = new Proxy(items, handler);
  return proxy;
}

export {
  negativeIndex,
};
