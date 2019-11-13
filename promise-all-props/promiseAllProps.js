function promiseAllProps(object) {
  return new Promise(() => {
    const returnObject = {};
    for (const [key, value] of Object.entries(object)) {
      returnObject[key] = value.then((promiseValue) => promiseValue);
    }
    return returnObject;
  });
}

export {
  promiseAllProps,
};
