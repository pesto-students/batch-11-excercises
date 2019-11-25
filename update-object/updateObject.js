function updateObject(index, value, numbers) {
  const proxy = new Proxy(numbers, {
    get(target, prop) {
      let property = prop;
      if (property < 0) {
        property += target.length;
      }
      return target[property];
    }
  });
  proxy[index] = value;
  return proxy;
}

export { updateObject };
