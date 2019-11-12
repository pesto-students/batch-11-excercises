
function promiseAllProps(promises) {
  // Promises.all(promises);
  const resolveObj = {};
  return new Promise((resolve, reject) => {
    for (const key of Object.keys(promises)) {
      promises[key]
        .then(result => {
          resolveObj[key] = result;
        })
        .catch(err => reject(err));
    }
    resolve(resolveObj);
  });
}

export {
  promiseAllProps,
};
