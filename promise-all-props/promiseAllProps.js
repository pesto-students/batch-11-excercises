
function promiseAllProps(objectToPromisify) {
  const promisifiedObject = {};
  return new Promise((resolve) => {
    for (let [key, value] of Object.entries(objectTo)) {
      value.then(x => {
        promisifiedObject[key] = x;
      });
    }
    resolve(promisifiedObject);
  });
}

export {
  promiseAllProps,
};
