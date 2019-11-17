function promiseAllProps(propObj) {
  const resultObj = Object.keys(propObj).reduce((acc, current) => {
    propObj[current].then((msg) => {
      acc[current] = msg;
    });
    return acc;
  }, {});

  const resultPromise = new Promise((resolve) => {
    Promise.all(Object.values(propObj)).then(() => resolve(resultObj));
  });
  return resultPromise;
}

export {
  promiseAllProps,
};
